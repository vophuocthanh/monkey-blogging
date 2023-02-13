import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

export default function useFirebaseImage(setValue, getValues) {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  if (!setValue || !getValues) return;
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setProgress(progressPercent);
        // trạng thái hình ảnh khi upload lên.
        switch (snapshot.state) {
          // trạng thái khi đang upload lên mà bị dừng
          case "paused":
            console.log("Upload is paused");
            break;
          // trạng thái đang upload (%)
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        // callback, nếu lỗi thì sẽ chạy vào đây
        console.log("Error");
      },
      () => {
        // Khi mà upload thành công vào trong firebase/storage thì nó sẽ có 1 đường đãn
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  const handleSelectImage = (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    console.log("onSelectImage ~ file", file);
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
  };
  const handleDeleteImage = () => {
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + getValues("image_name"));
    deleteObject(imageRef)
      .then(() => {
        console.log("Remove image successfully");
        setImage("");
        setProgress(0);
      })
      .catch((error) => {
        console.log("handleDeleteImage ~ error", error);
        console.log("Can not delete image");
      });
  };
  return {
    image,
    progress,
    handleSelectImage,
    handleDeleteImage,
  };
}

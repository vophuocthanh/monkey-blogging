import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import PostDetailsPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SighUpPage from "./pages/SighUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/sign-up"
            element={
              <>
                <SighUpPage></SighUpPage>
              </>
            }
          ></Route>
          <Route
            path="/sign-in"
            element={
              <>
                <SignInPage></SignInPage>
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <NotFoundPage></NotFoundPage>
              </>
            }
          ></Route>
          <Route
            path="/:slug"
            element={<PostDetailsPage></PostDetailsPage>}
          ></Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

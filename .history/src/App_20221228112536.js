import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SighUpPage from "./pages/SighUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

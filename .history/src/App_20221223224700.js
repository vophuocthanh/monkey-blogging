import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SighUpPage from "./pages/SighUpPage";

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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

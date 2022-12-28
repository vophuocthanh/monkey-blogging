import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

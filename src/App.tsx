import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layout/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "./layout/auth-layout";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import ProtectedRoutes from "./layout/protected-routes";
import MainLayout from "@/layout/main-layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          {/* Add protected routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

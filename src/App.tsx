import { Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { adminRoutes } from "./routes/AdminRoutes";
import userRoutes from "./routes/UserRoutes";

function App() {
  return (
    <div className="w-full space-y-4  p-4">
      <h2>Login Page</h2>
      <Button>Button</Button>
      <h2>SchadCN Setup Compelted / Tailwind Compelted</h2>

      <Routes>
        {adminRoutes()}
        {userRoutes()}
      </Routes>
    </div>
  );
}

export default App;

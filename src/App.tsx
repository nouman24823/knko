import { Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { adminRoutes } from "./routes/AdminRoutes";
import userRoutes from "./routes/UserRoutes";

function App() {
  return (
    <div className="w-full">

      <Routes>
        {adminRoutes()}
        {userRoutes()}
      </Routes>
    </div>
  );
}

export default App;

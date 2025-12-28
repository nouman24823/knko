import Appointment from "@/pages/dashboard/appointment/page";
import Dashboard from "@/pages/dashboard/page";
import Services from "@/pages/dashboard/services/page";
import Wellness from "@/pages/dashboard/wellness/page";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Route } from "react-router-dom";

const userRoutes = () => {
  return (
    <>
      {/* Dashboard Layout with Header & Footer */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Nested Dashboard Routes */}
        <Route index element={<Dashboard />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="services" element={<Services />} />
        <Route path="wellness" element={<Wellness />} />
      </Route>
    </>
  );
};

export default userRoutes;

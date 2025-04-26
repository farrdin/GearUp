import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { UserRole } from "@/types/user.interface";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser) as UserRole;
  const role = user?.role;
  useEffect(() => {
    if (role === "admin") {
      navigate("/dashboard/home");
    } else if (role === "customer") {
      navigate("/dashboard/profile");
    }
  }, [role, navigate]);

  return null;
};

export default DashboardRedirect;

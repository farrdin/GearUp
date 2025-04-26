import { JwtPayload, jwtDecode } from "jwt-decode";

interface MyJwtPayload extends JwtPayload {
  email: string;
  role: "admin" | "customer";
}

export const getUserFromToken = (): MyJwtPayload | null => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const decoded = jwtDecode<MyJwtPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

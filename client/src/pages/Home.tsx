import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

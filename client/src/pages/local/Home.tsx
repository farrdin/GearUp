import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import Categories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";
import Newsletter from "@/components/home/Newsletter";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Featured />
      <WhyChooseUs />
      <Testimonial />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;

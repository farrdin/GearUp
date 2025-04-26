const About = () => {
  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-secondary mb-4">
            About GearUp
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GearUp is your ultimate destination for top-quality bicycles,
            accessories, and everything you need to fuel your cycling passion.
            We strive to deliver high-performance bikes that elevate your riding
            experience.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At GearUp, we believe that every cyclist deserves the best. Our
              journey started with a shared passion for cycling and a desire to
              provide the best bicycles and accessories to cycling enthusiasts.
              From the very beginning, our focus has been on performance,
              durability, and innovation. With years of expertise and a
              commitment to excellence, GearUp has become a trusted brand in the
              cycling community.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/xtHqX7qN/colleagues-working-project-discussing-details.jpg" // Replace with actual image of the company or team
              alt="GearUp Team"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our mission is simple: to provide top-quality bicycles that inspire
            confidence, improve performance, and fuel your cycling passion. We
            are committed to making cycling accessible to all levels of riders
            and ensuring that every ride is a great experience.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="text-black text-4xl mb-4">🚴‍♂️</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Performance
            </h3>
            <p className="text-muted-foreground text-sm">
              We are passionate about creating high-performance bicycles that
              push the boundaries of cycling.
            </p>
          </div>
          <div className="text-center">
            <div className="text-black text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Sustainability
            </h3>
            <p className="text-muted-foreground text-sm">
              GearUp is committed to sustainable practices, from eco-friendly
              materials to supporting green initiatives in cycling.
            </p>
          </div>
          <div className="text-center">
            <div className="text-black text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Innovation
            </h3>
            <p className="text-muted-foreground text-sm">
              We embrace cutting-edge technology to create innovative bicycles
              and accessories that enhance the cycling experience.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is a group of passionate cyclists, designers, engineers,
            and customer service experts, dedicated to delivering the best in
            the cycling industry.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-xs text-center">
              <img
                src="https://i.ibb.co.com/7yQDyFp/Authors-6.jpg" // Replace with actual team member image
                alt="Team Member"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">John Doe</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md max-w-xs text-center">
              <img
                src="https://i.ibb.co.com/LJBDjXR/Authors-5.jpg" // Replace with actual team member image
                alt="Team Member"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Jane Smith</h3>
              <p className="text-sm text-muted-foreground">Head of Design</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md max-w-xs text-center">
              <img
                src="https://i.ibb.co.com/fQWB8Fg/Authors-7.jpg" // Replace with actual team member image
                alt="Team Member"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Mark Johnson
              </h3>
              <p className="text-sm text-muted-foreground">Lead Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

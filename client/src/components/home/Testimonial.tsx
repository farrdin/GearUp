const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      review:
        "GearUp has the best selection of bikes! I found the perfect mountain bike and love it!",
      img: "/john.jpg",
    },
    {
      name: "Sara Lee",
      review:
        "Amazing customer service and fast shipping! Highly recommend this shop.",
      img: "/sara.jpg",
    },
    {
      name: "Michael Smith",
      review:
        "I’ve been looking for a high-quality road bike and GearUp delivered!",
      img: "/michael.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Customer</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const Blog = () => {
  const posts = [
    {
      title: "5 Tips for Maintaining Your Bike",
      excerpt: "Keep your bike in top shape with these easy maintenance tips.",
      img: "https://i.ibb.co/8gX5LbmH/repair4.jpg",
      link: "/blog/5-bike-maintenance-tips",
    },
    {
      title: "Choosing the Right Bike for You",
      excerpt:
        "Learn how to pick the perfect bike based on your needs and style.",
      img: "https://i.ibb.co/bg5KdFDH/repair3.jpg",
      link: "/blog/choosing-the-right-bike",
    },
    {
      title: "Cycling Safety: What You Need to Know",
      excerpt: "Important safety tips every cyclist should follow.",
      img: "https://i.ibb.co/nNMJYYK0/repair2.jpg",
      link: "/blog/cycling-safety",
    },
  ];

  return (
    <section className="py-20 w-[80%] mx-auto text-center">
      <h2 className="text-4xl font-bold text-secondary mb-12">
        Latest from Our Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {posts.map(({ title, excerpt, img, link }, i) => (
          <a
            href={link}
            key={i}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {title}
              </h3>
              <p className="text-muted-foreground mb-5">{excerpt}</p>
              <span className="inline-block text-primary font-semibold hover:underline">
                Read More &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;

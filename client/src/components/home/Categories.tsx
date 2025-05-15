const Categories = () => {
  const categories = [
    {
      name: "Mountain Bikes",
      img: "https://i.ibb.co/prhLW5Xr/patrick-hendry-OZh-OBP-fao-unsplash.jpg",
    },
    {
      name: "Road Bikes",
      img: "https://i.ibb.co/HDM4pbBd/howard-bouchevereau-BRDO4-C-0h-s-unsplash.jpg",
    },
    {
      name: "Kids Bikes",
      img: "https://i.ibb.co/8LWrGdsd/aditya-wardhana-LFv9v-VBLmw-M-unsplash.jpg",
    },
    {
      name: "Accessories",
      img: "https://i.ibb.co/d0gVmz25/repair1.jpg",
    },
  ];

  return (
    <section className="py-20 w-[80%] mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#006D77] mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map(({ name, img }, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition duration-300 hover:scale-[1.03]"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-40 sm:h-48 object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-white text-lg font-semibold tracking-wide drop-shadow-sm">
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

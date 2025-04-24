import { Link } from "react-router-dom";

const Featured = () => {
  const bicycles = [
    { id: 1, name: "Mountain Bike", image: "/bike1.jpg", price: "$799" },
    { id: 2, name: "Road Bike", image: "/bike2.jpg", price: "$599" },
    { id: 3, name: "Hybrid Bike", image: "/bike3.jpg", price: "$649" },
    { id: 4, name: "Electric Bike", image: "/bike4.jpg", price: "$1200" },
    { id: 5, name: "City Bike", image: "/bike5.jpg", price: "$499" },
    { id: 6, name: "Cruiser Bike", image: "/bike6.jpg", price: "$699" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Bicycles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {bicycles.map((bike) => (
            <div
              key={bike.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{bike.name}</h3>
                <p className="text-lg font-bold text-primary">{bike.price}</p>
                <Link
                  to={`/bicycle/${bike.id}`}
                  className="mt-4 inline-block bg-primary text-white rounded-full py-2 px-6 hover:bg-opacity-80 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/bicycle"
            className="inline-block bg-primary text-white rounded-full py-3 px-8 hover:bg-opacity-80 transition"
          >
            View All Bicycles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;

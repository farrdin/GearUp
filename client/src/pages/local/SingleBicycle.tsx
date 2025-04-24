import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SingleBicycle = () => {
  const bicycle = {
    _id: "6758b89855a50df1624ab025",
    name: "Roadster 5000",
    brand: "SpeedX",
    price: 300,
    type: "Road",
    description: "A premium road bike designed for speed and performance.",
    quantity: 8,
    inStock: true,
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log("Added to cart", bicycle.name, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image & Description Section */}
        <div className="flex flex-col items-center">
          <img
            src="/roadster5000.jpg" // Replace with actual image URL
            alt={bicycle.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-center">
              Customer Reviews
            </h3>
            <div className="flex items-center justify-center gap-2 mt-4">
              {/* Add customer ratings here */}
              <span className="text-yellow-400">⭐⭐⭐⭐☆</span>
            </div>
          </div>
        </div>

        {/* Bike Details Section */}
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-primary">{bicycle.name}</h2>
          <p className="text-lg text-muted-foreground mb-4">
            By {bicycle.brand}
          </p>
          <p className="text-xl font-semibold text-primary">${bicycle.price}</p>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Bike Type</h4>
            <p className="text-muted-foreground">{bicycle.type}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Description</h4>
            <p className="text-muted-foreground">{bicycle.description}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Stock Availability</h4>
            <p
              className={`${
                bicycle.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {bicycle.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          <div className="mt-4 flex items-center">
            <h4 className="text-xl font-semibold mr-4">Quantity</h4>
            <button
              className="bg-gray-300 px-4 py-2 rounded-full"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="mx-4 text-lg">{quantity}</span>
            <button
              className="bg-gray-300 px-4 py-2 rounded-full"
              onClick={() =>
                setQuantity((prev) => Math.min(bicycle.quantity, prev + 1))
              }
            >
              +
            </button>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white hover:bg-opacity-80 transition"
            >
              Add to Cart
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/bicycle" className="text-primary hover:underline">
              Back to All Bicycles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBicycle;

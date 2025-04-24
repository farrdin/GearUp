import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBicycle = () => {
  // Sample bicycle data (This should come from your API in a real project)
  const bicycles = [
    {
      _id: "1",
      name: "Roadster 5000",
      brand: "SpeedX",
      price: 300,
      category: "Road",
      inStock: true,
    },
    {
      _id: "2",
      name: "Mountain Beast",
      brand: "X-Treme",
      price: 450,
      category: "Mountain",
      inStock: true,
    },
    {
      _id: "3",
      name: "Speedster 200",
      brand: "Swift",
      price: 250,
      category: "Road",
      inStock: false,
    },
    {
      _id: "4",
      name: "Trail King",
      brand: "X-Treme",
      price: 400,
      category: "Mountain",
      inStock: true,
    },
    {
      _id: "5",
      name: "City Rider",
      brand: "Urban Wheels",
      price: 150,
      category: "City",
      inStock: true,
    },
  ];

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [filteredBicycles, setFilteredBicycles] = useState(bicycles);

  // Update filtered bicycles based on search and filters
  useEffect(() => {
    const filtered = bicycles.filter((bicycle) => {
      const matchesSearch =
        bicycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bicycle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bicycle.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand
        ? bicycle.brand === selectedBrand
        : true;
      const matchesCategory = selectedCategory
        ? bicycle.category === selectedCategory
        : true;
      const matchesPrice =
        bicycle.price >= priceRange[0] && bicycle.price <= priceRange[1];

      return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    });
    setFilteredBicycles(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedBrand, selectedCategory, priceRange]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Bicycles</h1>

      {/* Search & Filters Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by brand, name, or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 border rounded-md text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-6 w-full md:w-2/3">
          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="py-2 px-4 border rounded-md text-sm"
          >
            <option value="">All Brands</option>
            <option value="SpeedX">SpeedX</option>
            <option value="X-Treme">X-Treme</option>
            <option value="Swift">Swift</option>
            <option value="Urban Wheels">Urban Wheels</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-2 px-4 border rounded-md text-sm"
          >
            <option value="">All Categories</option>
            <option value="Road">Road</option>
            <option value="Mountain">Mountain</option>
            <option value="City">City</option>
          </select>

          {/* Price Range Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="price-range" className="text-sm font-medium">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <span className="text-sm">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Bicycle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBicycles.length > 0 ? (
          filteredBicycles.map((bicycle) => (
            <div
              key={bicycle._id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="/bicycle-placeholder.jpg" // Replace with actual image URL
                alt={bicycle.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{bicycle.name}</h3>
              <p className="text-gray-500 text-sm mb-2">
                Brand: {bicycle.brand}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Category: {bicycle.category}
              </p>
              <p className="text-primary font-semibold mb-4">
                ${bicycle.price}
              </p>
              <Link
                to={`/bicycle/${bicycle._id}`}
                className="block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-80"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">
            No bicycles found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBicycle;

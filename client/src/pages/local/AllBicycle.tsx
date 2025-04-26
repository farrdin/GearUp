import { useGetBicyclesQuery } from "@/redux/features/bicycle/bicycleApi";
import { IBicycle } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const AllBicycle = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    inStock: "",
  });
  const [page, setPage] = useState(1);
  const limit = 6;

  const queryParams: Record<string, unknown> = {
    search: searchQuery,
    page,
    limit,
  };

  if (filters.type) queryParams.type = filters.type;
  if (filters.inStock) queryParams.inStock = filters.inStock === "true";

  const { data: bicycles, isLoading, error } = useGetBicyclesQuery(queryParams);

  // Safely extract all categories
  const allCategories: string[] = bicycles?.allData
    ? Array.from(new Set(bicycles.allData.map((bike: IBicycle) => bike.type)))
    : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilters({ type: "", inStock: "" });
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Bicycles</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <input
          type="text"
          placeholder="Search bicycles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-1/3 py-2 px-4 border rounded-md text-sm"
        />

        {allCategories.length > 0 && (
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="py-2 px-4 border rounded-md text-sm"
          >
            <option value="">All Categories</option>
            {allCategories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}

        <select
          value={filters.inStock}
          onChange={(e) => handleFilterChange("inStock", e.target.value)}
          className="py-2 px-4 border rounded-md text-sm"
        >
          <option value="">All Stock</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>

        <button
          onClick={handleReset}
          className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          Reset
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <FadeLoader color="#FFB800" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Failed to load bicycles</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bicycles?.data?.length ? (
              bicycles.data.map((bicycle: IBicycle) => (
                <div
                  key={bicycle._id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={bicycle.image}
                    alt={bicycle.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{bicycle.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Category: {bicycle.type}
                  </p>
                  <p className="text-primary font-semibold mb-1">
                    ${bicycle.price}
                  </p>
                  <p
                    className={`text-sm ${
                      bicycle.quantity > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {bicycle.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <Link
                    to={`/bicycle/${bicycle._id}`}
                    className="block text-center py-2 px-4 mt-4 bg-primary text-white rounded-md hover:bg-opacity-80"
                  >
                    View Details
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No bicycles found.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={bicycles?.data?.length < limit}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllBicycle;

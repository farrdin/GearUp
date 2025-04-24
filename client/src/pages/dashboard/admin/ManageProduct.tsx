import { useState } from "react";
import { useForm } from "react-hook-form";
import { Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductFormValues = {
  name: string;
  brand: string;
  price: number;
  quantity: number;
};

const ManageProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>();

  // Dummy product data for table
  const products = [
    { id: 1, name: "Roadster 5000", brand: "SpeedX", price: 300, quantity: 8 },
    {
      id: 2,
      name: "Mountain Master",
      brand: "TrailBlaze",
      price: 450,
      quantity: 5,
    },
  ];

  const onSubmit = (data: ProductFormValues) => {
    console.log("New Product Data: ", data);
    setIsModalOpen(false); // Close the modal after submitting
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Products
        </h1>

        {/* Button to Add Product */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={openModal}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Add New Product
          </Button>
        </div>

        {/* Products Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 px-4 text-sm text-gray-600">
                  Product Name
                </th>
                <th className="py-3 px-4 text-sm text-gray-600">Brand</th>
                <th className="py-3 px-4 text-sm text-gray-600">Price</th>
                <th className="py-3 px-4 text-sm text-gray-600">Quantity</th>
                <th className="py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-700">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {product.brand}
                  </td>
                  <td className="py-3 px-4 text-sm text-green-600">
                    ${product.price}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {product.quantity}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 ml-2">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Product */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Add New Product
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name", {
                    required: "Product Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("brand", { required: "Brand is required" })}
                />
                {errors.brand && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.brand.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("price", {
                    required: "Price is required",
                    min: 1,
                  })}
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: 1,
                  })}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={closeModal}
                  className="bg-gray-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-500"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;

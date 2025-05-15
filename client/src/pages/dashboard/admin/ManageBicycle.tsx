/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IBicycle } from "@/types";
import { InputField } from "@/components/ui/InputField";
import {
  useCreateBicycleMutation,
  useDeleteBicycleMutation,
  useGetBicyclesQuery,
  useUpdateBicycleMutation,
} from "@/redux/features/bicycle/bicycleApi";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
type BicycleFormValues = Omit<IBicycle, "inStock">;

const ManageBicycle = () => {
  const { data: bicycles, error, isLoading } = useGetBicyclesQuery({});
  const [createBicycle] = useCreateBicycleMutation();
  const [updateBicycle] = useUpdateBicycleMutation();
  const [deleteBicycle] = useDeleteBicycleMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBicycle, setSelectedBicycle] = useState<IBicycle | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BicycleFormValues>({
    defaultValues: selectedBicycle || {},
  });

  useEffect(() => {
    reset(selectedBicycle || {});
  }, [selectedBicycle, reset]);

  const onSubmit = async (formData: BicycleFormValues) => {
    try {
      if (selectedBicycle) {
        const result = await updateBicycle({
          id: selectedBicycle._id,
          data: formData,
        }).unwrap();
        if (result.status === true) {
          toast.success("Bicycle updated successfully!");
        }
      } else {
        const result = await createBicycle(formData).unwrap();
        if (result.status === true) {
          toast.success("Bicycle added successfully!");
        }
      }
      setIsModalOpen(false);
      reset();
      setSelectedBicycle(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      await deleteBicycle(id).unwrap();
      toast.success("Bicycle deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete bicycle");
    }
  };
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Bicycles
        </h1>

        <div className="flex justify-end mb-6">
          <Button
            onClick={() => {
              setSelectedBicycle(null);
              reset();
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white"
          >
            Add New Bicycle
          </Button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="bg-white overflow-x-auto shadow-lg rounded-lg p-6 min-h-[300px] flex items-center justify-center">
            {isLoading ? (
              <FadeLoader color="#primary" />
            ) : error ? (
              <p className="text-red-600 text-center">
                Failed to load bicycles.
              </p>
            ) : (
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Brand</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bicycles?.data?.map((bicycle: IBicycle) => (
                    <tr key={bicycle._id} className="border-b">
                      <td className="py-3 px-4">
                        <img
                          src={bicycle.image}
                          alt={bicycle.name}
                          className="h-10 w-10 object-cover rounded"
                        />
                      </td>
                      <td className="py-3 px-4">{bicycle.name}</td>
                      <td className="py-3 px-4">{bicycle.brand}</td>
                      <td className="py-3 px-4">{bicycle.type}</td>
                      <td className="py-3 px-4 text-green-600">
                        ${bicycle.price}
                      </td>
                      <td className="py-3 px-4">{bicycle.quantity}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => {
                            setSelectedBicycle(bicycle);
                            reset(bicycle);
                            setIsModalOpen(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() => handleDelete(bicycle?._id)}
                          className="text-red-600 hover:text-red-800 ml-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          key={selectedBicycle?._id || "new"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          <div className="w-full max-w-xl rounded-2xl bg-zinc-900 text-white shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Add New Bicycle
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Bicycle Name"
                  name="name"
                  register={register}
                  error={errors.name?.message}
                />
                <InputField
                  label="Brand"
                  name="brand"
                  register={register}
                  error={errors.brand?.message}
                />
                <InputField
                  label="Image URL"
                  name="image"
                  register={register}
                  error={errors.image?.message}
                />
                <InputField
                  label="Price"
                  name="price"
                  type="number"
                  register={register}
                  error={errors.price?.message}
                />
                <InputField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  register={register}
                  error={errors.quantity?.message}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Type
                  </label>
                  <select
                    {...register("type", { required: "Type is required" })}
                    className="w-full mt-1 p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Road">Road</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="BMX">BMX</option>
                    <option value="Electric">Electric</option>
                  </select>
                  {errors.type && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.type.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="w-full mt-1 p-2 bg-zinc-800 border border-zinc-700 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  onClick={() => {
                    reset();
                    setIsModalOpen(false);
                    setSelectedBicycle(null);
                  }}
                  className="bg-zinc-700 hover:bg-zinc-600 text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {selectedBicycle ? "Update Bicycle" : "Add Bicycle"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBicycle;

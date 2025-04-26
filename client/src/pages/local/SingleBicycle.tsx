import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useGetSingleBicycleQuery } from "@/redux/features/bicycle/bicycleApi";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button"; // Make sure you have this
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { IUser } from "@/types/user.interface";

const SingleBicycle = () => {
  const { id } = useParams();
  const user = useAppSelector(selectCurrentUser) as IUser;
  const { data: bicycle, error, isLoading } = useGetSingleBicycleQuery(id);
  const [createOrder] = useCreateOrderMutation();
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = async () => {
    if (!user) {
      toast.info("Please login first!");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return;
    }

    const product = [
      {
        bicycle: bicycle.data._id,
        name: bicycle.data.name,
        brand: bicycle.data.brand,
        quantity,
      },
    ];
    try {
      const res = await createOrder({
        bicycles: product,
        deliveryType: "standard",
      });
      if ("data" in res && res?.data?.data) {
        toast.success(res?.data?.message);
        setTimeout(() => {
          window.location.href = res?.data?.data?.payment?.checkout_url;
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to process the order!");
    }
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <FadeLoader color="#FFB800" />
      </div>
    );
  }

  if (error || !bicycle?.data) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-red-500">
          There was an error loading the bicycle. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image & Description Section */}
        <div className="flex flex-col items-center">
          <img
            src={bicycle.data.image}
            alt={bicycle.data.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-center">
              Customer Reviews
            </h3>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-yellow-400">⭐⭐⭐⭐☆</span>
            </div>
          </div>
        </div>

        {/* Bike Details Section */}
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-secondary">
            {bicycle.data.name}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            By {bicycle.data.brand}
          </p>
          <p className="text-xl font-semibold text-primary">
            ${bicycle.data.price}
          </p>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Bike Type</h4>
            <p className="text-muted-foreground">{bicycle.data.type}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Description</h4>
            <p className="text-muted-foreground">{bicycle.data.description}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Stock Availability</h4>
            <p
              className={`${
                bicycle.data.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {bicycle.data.inStock ? "In Stock" : "Out of Stock"}
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
                setQuantity((prev) => Math.min(bicycle.data.quantity, prev + 1))
              }
            >
              +
            </button>
          </div>

          <div className="mt-6">
            {user?.role !== "admin" && (
              <Button
                onClick={handleBuyNow}
                className="w-full bg-primary text-white hover:bg-opacity-80 transition"
              >
                Buy Now
              </Button>
            )}
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

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useMyOrderQuery } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { IOrder } from "@/types/orders.type";
import { IUser } from "@/types/user.interface";
import { FadeLoader } from "react-spinners";

const MyOrder = () => {
  const user = useAppSelector(selectCurrentUser) as IUser;
  const email = user?.email;
  const { data: orders, isLoading } = useMyOrderQuery(email);
  if (isLoading)
    return <FadeLoader className="flex w-full justify-center items-center" />;
  if (!orders?.data?.length) {
    return <p className="text-gray-500">No orders found.</p>;
  }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Orders</h1>
        {orders?.data?.map((order: IOrder) => (
          <div
            key={order?._id}
            className="mb-6 p-4 border rounded-lg shadow-md bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-gray-800">
                Order #{order?._id}
              </div>
              <div
                className={`px-4 py-2 rounded-lg ${
                  order.status === "Shipped"
                    ? "bg-yellow-500 text-white"
                    : order.status === "Delivered"
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
              >
                {order.status}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-700">Products</h2>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                {order?.bicycles?.map((bicycle) => (
                  <li
                    key={bicycle?._id}
                    className="flex justify-between items-center py-1"
                  >
                    <span>
                      {bicycle?.name} (x{bicycle?.quantity})
                    </span>
                    <span className="text-gray-500">{bicycle?.quantity}pc</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mt-4">
              <div className="text-lg font-semibold text-gray-800">Total:</div>
              <div className="text-lg font-semibold text-gray-900">
                ${order.totalPrice}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <span>
                Order placed on:{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;

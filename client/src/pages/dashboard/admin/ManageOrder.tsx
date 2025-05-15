/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/features/order/orderApi";
import { IOrder } from "@/types/orders.type";
import { Trash2, Edit } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { toast } from "react-toastify";

const ManageOrder = () => {
  const { data: orders } = useGetAllOrdersQuery({});
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const result = await updateOrder({ id, status });
      if (result?.data?.success) {
        toast.success("Order status updated successfully!");
        return;
      }
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };
  const handleDeleteOrder = async (id: string) => {
    try {
      await deleteOrder(id);
      alert("Order deleted successfully!");
    } catch (error) {
      alert("Failed to delete order");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Orders
        </h1>

        {/* Orders Table */}
        <div className="bg-white overflow-x-auto shadow-lg rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 px-4 text-sm text-gray-600">Order ID</th>
                <th className="py-3 px-4 text-sm text-gray-600">
                  Customer Email
                </th>
                <th className="py-3 px-4 text-sm text-gray-600">Product</th>
                <th className="py-3 px-4 text-sm text-gray-600">Quantity</th>
                <th className="py-3 px-4 text-sm text-gray-600">Total Price</th>
                <th className="py-3 px-4 text-sm text-gray-600">Order Date</th>
                <th className="py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.map((order: IOrder) => (
                <tr key={order._id} className="border-b">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-700">
                    {order._id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order?.user?.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order?.bicycles?.[0]?.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order?.bicycles?.[0]?.quantity}
                  </td>
                  <td className="py-3 px-4 text-sm text-green-600">
                    ${order.totalPrice}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>

                  {/* Status Column */}
                  <td className="py-3 px-4 text-sm text-gray-600 flex justify-between">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>

                    {/* Dropdown Menu for Status Update */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-blue-600 hover:text-blue-800 ml-2">
                          <Edit className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border rounded-md shadow-lg">
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateStatus(order._id, "Pending")
                          }
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleUpdateStatus(order._id, "Paid")}
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Paid
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateStatus(order._id, "Processing")
                          }
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Processing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateStatus(order._id, "Shipped")
                          }
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Shipped
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateStatus(order._id, "Completed")
                          }
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Completed
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateStatus(order._id, "Cancelled")
                          }
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Cancelled
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>

                  {/* Actions Column */}
                  <td className="py-3 px-4 text-sm">
                    {/* Delete Order */}
                    <button
                      className="text-red-600 hover:text-red-800 ml-2"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;

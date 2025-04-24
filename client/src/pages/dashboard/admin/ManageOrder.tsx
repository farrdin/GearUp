import { Trash2, Edit } from "lucide-react"; // Icons for Edit and Trash

type Order = {
  _id: string;
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
};

const ManageOrder = () => {
  // Dummy order data for table
  const orders: Order[] = [
    {
      _id: "6758b9e955a50df1624ab04d",
      email: "customer@example.com",
      product: "Roadster 5000",
      quantity: 2,
      totalPrice: 600,
      createdAt: "2024-12-10T22:00:09.508+00:00",
      updatedAt: "2024-12-10T22:00:09.508+00:00",
    },
    {
      _id: "6758b9e955a50df1624ab04e",
      email: "customer2@example.com",
      product: "Mountain Master",
      quantity: 1,
      totalPrice: 450,
      createdAt: "2024-12-12T14:10:15.678+00:00",
      updatedAt: "2024-12-12T14:10:15.678+00:00",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Orders
        </h1>

        {/* Orders Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
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
                <th className="py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-700">
                    {order._id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order.product}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {order.quantity}
                  </td>
                  <td className="py-3 px-4 text-sm text-green-600">
                    ${order.totalPrice}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
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
    </div>
  );
};

export default ManageOrder;

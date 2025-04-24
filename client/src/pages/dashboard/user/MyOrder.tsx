// Dummy order data (replace with actual data fetching)
const orders = [
  {
    orderId: "12345",
    products: [
      {
        name: "Roadster 5000",
        quantity: 2,
        price: 300,
      },
    ],
    totalPrice: 600,
    status: "Shipped",
    createdAt: "2024-12-10T22:00:09.508+00:00",
  },
  {
    orderId: "12346",
    products: [
      {
        name: "Mountain Beast 2000",
        quantity: 1,
        price: 500,
      },
    ],
    totalPrice: 500,
    status: "Delivered",
    createdAt: "2024-12-05T16:00:00.000+00:00",
  },
];

const MyOrder = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Orders</h1>

        {/* Order List */}
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="mb-6 p-4 border rounded-lg shadow-md bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-gray-800">
                Order #{order.orderId}
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
                {order.products.map((product, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-1"
                  >
                    <span>
                      {product.name} (x{product.quantity})
                    </span>
                    <span className="text-gray-500">${product.price}</span>
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

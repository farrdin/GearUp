// Dummy cart data (replace with real data from Redux or backend)
const cartItems = [
  {
    name: "Roadster 5000",
    quantity: 2,
    price: 300,
  },
  {
    name: "Mountain Beast 2000",
    quantity: 1,
    price: 500,
  },
];

const CheckoutPage = () => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-pink-50 flex flex-col text-gray-800">
      {/* Sticky Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-gray-800">Checkout</h1>
        <span className="text-sm text-gray-600">Your Cart</span>
      </header>

      {/* Checkout Form Section */}
      <main className="flex-1 overflow-hidden px-4 sm:px-6 lg:px-8 py-6 flex flex-col justify-between">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 flex-1 overflow-auto">
          {/* Order Summary */}
          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between text-gray-700">
                  <span className="text-lg">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xl font-semibold text-gray-900 mt-6 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </section>

          {/* Delivery Information */}
          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Delivery Information
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 Main Street, City, Country"
                />
              </div>
            </form>
          </section>

          {/* Payment Information */}
          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Payment Information
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="card"
                  className="block text-sm font-medium text-gray-700"
                >
                  Credit Card Number
                </label>
                <input
                  type="text"
                  id="card"
                  name="card"
                  className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 5678 9101 1121"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="123"
                  />
                </div>
              </div>
            </form>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold w-full hover:bg-primary-dark transition-all duration-200">
              Complete Checkout
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center text-sm text-gray-600">
        <p>© 2025 Bicycle Store | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default CheckoutPage;

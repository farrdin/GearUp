import { Trash2, Edit } from "lucide-react";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

const ManageUser = () => {
  // Dummy user data for table
  const users: User[] = [
    {
      _id: "67f58b9ffc71552de2230efe",
      name: "WEB ADMIN",
      email: "admin@blog.com",
      role: "admin",
      isBlocked: false,
      createdAt: "2025-04-08T20:48:31.536+00:00",
      updatedAt: "2025-04-08T20:48:31.536+00:00",
    },
    {
      _id: "67f58b9ffc71552de2230efg",
      name: "USER ONE",
      email: "user1@blog.com",
      role: "user",
      isBlocked: true,
      createdAt: "2025-03-10T14:12:12.345+00:00",
      updatedAt: "2025-03-10T14:12:12.345+00:00",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Users
        </h1>

        {/* Users Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 px-4 text-sm text-gray-600">User ID</th>
                <th className="py-3 px-4 text-sm text-gray-600">Name</th>
                <th className="py-3 px-4 text-sm text-gray-600">Email</th>
                <th className="py-3 px-4 text-sm text-gray-600">Role</th>
                <th className="py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="py-3 px-4 text-sm text-gray-600">Created At</th>
                <th className="py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-700">
                    {user._id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {user.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {user.role}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        user.isBlocked
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString()}
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

export default ManageUser;

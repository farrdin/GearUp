import { useGetUserQuery } from "@/redux/features/user/userApi";
import { Edit } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { toast } from "react-toastify";

type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

const ManageUser = () => {
  const { data: users } = useGetUserQuery({});
  const [updateUser] = useUpdateUserMutation();

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      const result = await updateUser({
        userId,
        updatedData: { role: newRole },
      }).unwrap();
      if (result?.data) {
        toast.success("User role updated successfully!");
      }
    } catch (error) {
      console.error("Error updating role", error);
    }
  };
  const handleStatusChange = async (userId: string, newStatus: boolean) => {
    try {
      const result = await updateUser({
        userId,
        updatedData: { isBlocked: newStatus },
      }).unwrap();
      if (result?.data) {
        toast.success("User status updated successfully!");
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Manage Users
        </h1>
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
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user: TUser) => (
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

                  <td className="py-3 px-4 text-sm text-gray-600 flex gap-2">
                    {user.role}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border rounded-md shadow-lg">
                        <DropdownMenuItem
                          onClick={() => handleRoleChange(user._id, "customer")}
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Customer
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleRoleChange(user._id, "admin")}
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Admin
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 ">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        user.isBlocked
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-blue-600 hover:text-blue-800 ml-2">
                          <Edit className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border rounded-md shadow-lg">
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(user._id, true)}
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Block User
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(user._id, false)}
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          Unblock User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString()}
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

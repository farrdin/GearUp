import { Button } from "@/components/ui/button";
import { Edit, Lock } from "lucide-react"; // Icons

const Profile = () => {
  // Dummy user data for now
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    profilePicture: "/profile-picture.jpg", // You can replace this with the actual profile picture URL
    createdAt: "2023-11-15T12:30:00.000Z",
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePicture || "/default-profile.png"}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {user.name}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{user.role}</p>
          <p className="text-sm text-gray-500 mb-6">{user.email}</p>
        </div>

        {/* Profile Information */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600">
                Member Since:
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600">Email:</span>
              <span className="ml-2 text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            onClick={() => alert("Edit Profile")}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>

          <Button
            onClick={() => alert("Change Password")}
            className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          >
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

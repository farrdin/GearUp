import ChangePasswordModal from "@/components/dashboard/ChangePasswordModalProps";
import UpdateProfileModal from "@/components/dashboard/UpdateProfileModal";
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetMyProfileQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { IUser } from "@/types/user.interface";
import { Edit, Lock } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const userInfo = useAppSelector(selectCurrentUser) as IUser;
  const { data: user } = useGetMyProfileQuery(userInfo);

  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  const openUpdateProfileModal = () => {
    setIsUpdateProfileModalOpen(true);
  };

  const closeUpdateProfileModal = () => {
    setIsUpdateProfileModalOpen(false);
  };

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <img
            src={user?.data?.photoURL}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {user?.name}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{user?.data?.role}</p>
          <p className="text-sm text-gray-500 mb-6">{user?.data?.email}</p>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600">
                Member Since:
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {new Date(user?.data?.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600">Email:</span>
              <span className="ml-2 text-sm text-gray-500">
                {user?.data?.email}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            onClick={openUpdateProfileModal}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>

          <Button
            onClick={openChangePasswordModal}
            className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          >
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        </div>
      </div>

      {/* Modals */}
      {isUpdateProfileModalOpen && (
        <UpdateProfileModal
          closeModal={closeUpdateProfileModal}
          user={user?.data}
        />
      )}

      {isChangePasswordModalOpen && (
        <ChangePasswordModal
          closeModal={closeChangePasswordModal}
          user={user?.data}
        />
      )}
    </div>
  );
};

export default Profile;

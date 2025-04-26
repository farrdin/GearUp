/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi"; // Assuming you have this mutation
import { toast } from "react-toastify";

interface ChangePasswordModalProps {
  closeModal: () => void;
  user: any;
}

const ChangePasswordModal = ({ closeModal }: ChangePasswordModalProps) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [changePassword] = useChangePasswordMutation(); // Assuming this API is correct

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const res = await changePassword({ oldPassword, newPassword }).unwrap();
      if (res?.data) {
        toast.success("Profile Updated Successfull.");
        closeModal();
      }
    } catch (err) {
      setError("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Change Password
        </h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <div className="mb-4">
          <label
            htmlFor="oldPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Old Password
          </label>
          <input
            id="oldPassword"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-600"
          >
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
          >
            Save Changes
          </Button>
          <Button
            onClick={closeModal}
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow-md hover:bg-gray-400 ml-4"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;

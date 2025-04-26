import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { IUser } from "@/types/user.interface";
import { toast } from "react-toastify";

interface UpdateProfileModalProps {
  closeModal: () => void;
  user: IUser;
}

const UpdateProfileModal = ({ closeModal, user }: UpdateProfileModalProps) => {
  const [name, setName] = useState(user?.name || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async () => {
    try {
      const userId = user._id;
      const updatedData = {
        name,
        photoURL,
      };
      const res = await updateUser({ userId, updatedData }).unwrap();
      if (res?.data) {
        toast.success("Profile Updated Successfull.");
      }
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Update Profile
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-sm font-medium text-gray-600"
          >
            Photo URL
          </label>
          <input
            id="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
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

export default UpdateProfileModal;

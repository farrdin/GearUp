/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange here
}

export const InputField: React.FC<Props> = ({
  label,
  name,
  register,
  error,
  type = "text",
  onChange,
}: Props) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        className="w-full mt-1 p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
};

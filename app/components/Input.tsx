interface InputProps {
  type: string;
  placeholder?: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-6 py-4 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
};

export default Input;

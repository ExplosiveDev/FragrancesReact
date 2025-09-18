import { useState, type FC, type InputHTMLAttributes, type ChangeEvent } from "react";

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
  type?: string;
  validate?: (value: string) => string | null; 
}

const TextInput: FC<TextInputProps> = ({ className, type = "text", validate, onChange, ...props }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validate) {
      setError(validate(value));
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="w-full">
      <input
        {...props}
        type={type}
        onChange={handleChange}
        className={`w-full border-b px-3 py-2 transition ease-in-out 
          focus:outline-none focus:shadow-md focus:shadow-gray-400 
          ${error ? "border-red-500 focus:shadow-red-400" : "border-zinc-800"} 
          ${className ?? ""}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;

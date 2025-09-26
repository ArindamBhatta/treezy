import React, { useId, forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, className = "", type = "text", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        className={`w-full ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;

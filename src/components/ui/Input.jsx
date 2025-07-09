import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            block w-full px-3 py-2 border rounded-lg shadow-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${
              error
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
// This allows the Input component to be used with refs, which is useful for form handling libraries or when you need to focus the input programmatically.
// The displayName is set for better debugging in React DevTools.

import React, { forwardRef } from "react";
import "./form-group.css";

type FormGroupProps = {
  label: string;
  isMessage?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const FormGroup = forwardRef<HTMLInputElement & HTMLTextAreaElement, FormGroupProps>(
  ({ label, isMessage = false, ...props }, ref) => {
    return (
      <div className="form-group-wrapper">
        <label htmlFor={props.name} className="text-dark uppercase letter-spacing block">
          {label}
        </label>
        {isMessage ? (
          <textarea
            id={props.name}
            ref={ref}
            className="text-white w-full bg-transparent border-b border-white"
            {...props}
          />
        ) : (
          <input
            id={props.name}
            ref={ref}
            type="text"
            className="text-white w-full bg-transparent border-b border-white"
            {...props}
          />
        )}
      </div>
    );
  }
);

FormGroup.displayName = "FormGroup";

export default FormGroup;
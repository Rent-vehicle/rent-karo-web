import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function Input({ id, name, label, type = "text", placeholder }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className={`block mb-2 font-medium text-black `}>
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-white border-gray-300  border  rounded-xl 
                   text-black text-base
                   placeholder-gray-400 transition`}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
}

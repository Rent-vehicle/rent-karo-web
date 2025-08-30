import React from "react";
import { Field, ErrorMessage } from "formik";
import { useQueryTheme } from "@/hooks/useQueryTheme";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function Input({ id, name, label, type = "text", placeholder }: InputProps) {
  const { isLight } = useQueryTheme();

  return (
    <div>
      <label
        htmlFor={id}
        className={`block mb-2 font-medium ${isLight ? "text-black" : "text-white"} `}
      >
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 ${isLight ? "bg-white border-gray-300" : " bg-gray-300 border-gray-500"}  border  rounded-xl 
                   text-black text-base focus:ring-2 focus:ring-black focus:border-black 
                   placeholder-gray-400 transition`}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
}

import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export const apiRoutes = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    verifyCode: "/auth/verify-code",
    forgetPassword: "/auth/forget-password",
    resetPassword: "/auth/reset-password",
    logout: "/auth/logout",
  },
  user: {
    fetchMe: "/users/me",
    updateProfile: "/users/update",
    updatePassword: "/users/update-password",
  },
};

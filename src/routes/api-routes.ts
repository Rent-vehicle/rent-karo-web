export const apiRoutes = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    verifyCode: "/auth/verify-code",
    forgetPassword: "/auth/forget-password",
    resetPassword: "/auth/reset-password",
    logout: "/auth/logout",
    verifyEmail: "auth/verify-email",
    sendVerificationCode: "auth/send-email-verification",
    sentGoogleOAuthToken: "google/oAuth/token",
  },
  user: {
    fetchMe: "/users/me",
    updateProfile: "/users/update",
    updatePassword: "/users/update-password",
  },
};

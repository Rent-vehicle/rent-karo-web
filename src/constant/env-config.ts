const ENV_CONFIG = {
  BACKEND_URL: process.env.NEXT_PUBLIC_API_URL || "",
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
};

export default ENV_CONFIG;

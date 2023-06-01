import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const baseURL = "https://id.werify.net";

  const auth = werify();
  auth.config.baseURL = baseURL;
  return { auth };
};

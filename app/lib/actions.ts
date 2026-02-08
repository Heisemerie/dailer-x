import { ApiClient } from "./apiClient";
import { SignInResponse } from "./definitions";

// Signin Service
export const signInService = new ApiClient<SignInResponse>("/login");

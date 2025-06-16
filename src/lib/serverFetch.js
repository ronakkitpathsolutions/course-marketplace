import { BASE_URL } from "@/constants";
import { cookies } from "next/headers";

const SERVER_URL = BASE_URL + "/api"; // Base URL for the API

const serverFetch = async (url = "", options = {}) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value; // Get token from cookies

  const headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(`${SERVER_URL}${url}`, {
      ...options,
      headers,
      cache: "no-store", // SSR freshness
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Server error");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

export default serverFetch;

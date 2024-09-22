import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_KEY;
const API = {
  weather: "/weather",
  analytics: "/analytics",
  city: "/city",
};

type APIKeys = keyof typeof API;

const getAPIUrl = (url: string | string[]) => {
  if (Array.isArray(url)) {
    const workUrl = url[0] as APIKeys;
    url.shift();
    url = API[workUrl] + "/" + url.join("/") + "/";
  } else url = API[url as APIKeys];
  return url;
};

const axioInstance = axios.create({
  baseURL: API_URL,
});
axioInstance.interceptors.request.use(async (request) => {
  if (typeof window !== "undefined") {
    const storeTokenData = localStorage.getItem(
      import.meta.env.VITE_USER_TOKEN
    );
    if (storeTokenData)
      request.headers["Authorization"] = `Bearer ${storeTokenData}`;
  }
  if (request.url) {
    request.url = getAPIUrl(request.url);
  }
  return request;
});

axioInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const status = error.response.status;
    toast("Error: " + status, {
      description:
        "The data you requested could not be found, Invalid Data requested",
    });
    throw error;
  }
);

const axiosFireApi = async (url, method = "get", data = {}) => {
  method = method.toLowerCase();
  let allData = {
    url,
    method,
  };
  if (method === "get" || method === "delete") {
    allData["params"] = data;
  } else if (method === "post" || method === "patch" || method === "put") {
    allData["data"] = data;
  }
  try {
    const result = await axioInstance(allData);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response.data,
    };
  }
};

export { API_URL, axioInstance, axiosFireApi };

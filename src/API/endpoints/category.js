import { axiosInstance } from "../../utils/axios";

export const getCategory = async () => {
   const response = await axiosInstance.get("/categories/all");
   return response?.data;
}
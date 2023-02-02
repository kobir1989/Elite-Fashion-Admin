import { axiosInstance } from "../../utils/axios";

export const getSubCategory = async (id) => {
   console.log(id, "ID")
   if (id) {
      const response = await axiosInstance.get(`/sub-category/${id}`);
      // console.log(response)
      return response?.data
   }
};
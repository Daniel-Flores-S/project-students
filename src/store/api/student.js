import { getAPIClient } from "../../data/service/axios";

export const registerStudent = async (body) => {
  const api = getAPIClient();

  try {
    const data = await api.post("/", body);    
    return data;
  } catch (error) {
    console.log(error);
  }
};

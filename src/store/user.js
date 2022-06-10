import { getAPIClient } from "../data/service/axios";

export const getUsers = async () => {
  const api = getAPIClient();

  try {
    const data = await api.get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

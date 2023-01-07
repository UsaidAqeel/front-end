import axios from "axios";
import { baseUrl } from "../constant";

export const signupUser = async (payload) => {
  try {
    console.log(payload);
    const res = axios.post(`${baseUrl}/api/signUp`, payload);
    return res;
  } catch (err) {
    return { error: true };
  }
};


export const loginUser = async (payload) => {
    try {
      console.log(payload);
      const res = axios.post(`${baseUrl}/api/logIn`, payload);
      return res;
    } catch (err) {
      return { error: true };
    }
  };
  
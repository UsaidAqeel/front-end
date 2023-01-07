import axios from "axios";
import { baseUrl } from "../constant";

export const signupUser = async (payload) => {
  try {
    console.log(payload);
    const res = axios.post(`${baseUrl}/api/signUp`, payload);
    return { error: false, data: res };
  } catch (err) {
    return { error: true };
  }
};

export const loginUser = async (payload) => {
  try {
    const res = await axios.post(`${baseUrl}/api/logIn`, payload);
    return { error: false, data: res.data };
  } catch (err) {
    return { error: true , data : err?.response?.data };
  }
};

export const createPost = async (payload) => {
  try {
    console.log(payload);
    const res = axios.post(`${baseUrl}/api/post`, payload);
    return { error: false, data: res };
  } catch (err) {
    return { error: true };
  }
};


export const getpost = async (payload) => {
  try {
    console.log(payload);
    const res = axios.post(`${baseUrl}/api/post`, payload);
    return { error: false, data: res };
  } catch (err) {
    return { error: true };
  }
};

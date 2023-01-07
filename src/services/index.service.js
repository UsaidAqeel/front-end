import axios from "axios";
import { baseUrl } from "../constant";

export const signupUser = async (payload) => {
  try {
    console.log(payload);
    const res = await axios.post(`${baseUrl}/api/signUp`, payload);
    return { error: false, data: res };
  } catch (err) {
    return { error: true, data: err?.response?.data };
  }
};

export const loginUser = async (payload) => {
  try {
    const res = await axios.post(`${baseUrl}/api/logIn`, payload);
    return { error: false, data: res.data };
  } catch (err) {
    return { error: true, data: err?.response?.data };
  }
};

export const createPosts = async (payload) => {
  try {
    const res = await axios.post(`${baseUrl}/api/post`, payload, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return { error: false, data: res };
  } catch (err) {
    return { error: true, data: err?.response?.data };
  }
};

export const getPost = async (payload) => {
  try {
    const res = await axios.get(`${baseUrl}/api/getPost`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return { error: false, data: res };
  } catch (err) {
    return { error: true, data: err?.response?.data.data.data };
  }
};

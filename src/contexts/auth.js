import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = async (body) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/auth/login`,
        body
      );
      console.log(data);
      if (data) {
        localStorage.setItem("user_token", JSON.stringify(data));
        navigate("/home");
      }
      console.log(data);
    } catch (error) {
      return error;
    }
  };

  const signup = async (body) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/auth/register`,
        body
      );
      console.log(res?.data);
    } catch (error) {
      return error;
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

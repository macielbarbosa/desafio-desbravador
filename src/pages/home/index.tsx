import { useEffect } from "react";

import { axiosInstance } from "@utils/axiosInstance";

export const Home = () => {
  const getUser = async () => {
    const { data } = await axiosInstance("users/macielbarbosa");
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <p>Home</p>;
};

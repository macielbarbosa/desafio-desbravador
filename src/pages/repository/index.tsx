import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { axiosInstance } from "@utils/axiosInstance";
import { Repository as IRepository } from "@pages/home/interfaces";

export const Repository = () => {
  const { username, name } = useParams();
  const navigate = useNavigate();
  const [repository, setRepository] = useState<IRepository>();

  const getRepository = async () => {
    try {
      const { data } = await axiosInstance(`repos/${username}/${name}`);
      setRepository(data);
    } catch (error) {
      navigate("notfound");
    }
  };

  useEffect(() => {
    getRepository();
  }, []);

  return <p>{repository?.full_name}</p>;
};

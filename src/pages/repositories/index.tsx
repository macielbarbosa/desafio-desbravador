import { useParams } from "react-router";

export const Repositories = () => {
  const { userId } = useParams();
  return <p>Repositories userId={userId}</p>;
};

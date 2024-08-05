import { Outlet, useParams } from "react-router-dom";

export default function Post() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>Post {params.id} </h1>
      <Outlet />
    </>
  );
}

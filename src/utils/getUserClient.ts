import axios from "axios";
export default function getUser(id: string | undefined) {
  console.log(id);
  return axios.get("/api/user", {
    data: {
      id,
    },
  });
}

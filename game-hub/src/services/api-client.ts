import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "906e581192184821b37ffa51afa7df33",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac33f5ddbec845d1a933014753cc3600",
  },
});

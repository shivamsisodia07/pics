import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wi6XomMrcPhB2A0yyAdb5LtZpZxPXR4IuQ_KxpO50OE",
  },
});

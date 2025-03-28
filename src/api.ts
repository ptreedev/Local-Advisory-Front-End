import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getEvents = () => {
  return client.get("/events").then(({ data }) => {
    console.log(data);
    return data;
  });
};

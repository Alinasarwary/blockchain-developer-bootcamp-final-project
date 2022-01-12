import axios from "axios";
const axiosClint = axios.create({
  baseURL: "http://localhost:3000/api"
});
export default {
  addCitizen(citizen) {
    return axiosClint.post("/add", citizen);
  },
  readCitizen() {
    return axiosClint.get("/all");
  },
  deleteCitizen(citizenId) {
    return axiosClint.delete(`/citizen/${citizenId}/delete`);
  },
//   getById(citizenId) {
//     return axiosClint.get(`/citizen/${citizenId}`)
//   },
};

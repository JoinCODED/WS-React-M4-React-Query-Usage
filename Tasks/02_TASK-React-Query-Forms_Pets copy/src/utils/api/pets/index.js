import api from "../api";

export function list() {
  return api.get(`pets`);
}

const pets = { list };
export default pets;

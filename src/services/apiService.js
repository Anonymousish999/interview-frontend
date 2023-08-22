import http from "./httpService";
const url = "http://https://dark-plum-sea-urchin-coat.cyclic.cloud/:1337";

export function getInterviewer(email) {
  return http.post(`${url}/interviewer/getOne`, email);
}

export function getAllInterviewer() {
  return http.get(`${url}/interivewer/getAll`);
}
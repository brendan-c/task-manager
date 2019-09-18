import store from "../store";
// import { http } from "./HttpService";
// import jwt from "jsonwebtoken";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login() {
  const token = {
    username: "brendan"
  };
  setToken(token);
}

function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
  store.dispatch("authenticate");
}

export function getUsername() {
  return "brendan";
}

export function getUserId() {
  return 1;
}

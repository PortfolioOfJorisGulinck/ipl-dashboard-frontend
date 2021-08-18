import axios from "axios";
import { REST_URL } from "./RESTurl";

export async function getTeam(teamName) {
  try {
    const response = await axios.get(`${REST_URL}/teams/${teamName}`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load team:" + error);
  }
}

export async function getAllTeams() {
  try {
    const response = await axios.get(`${REST_URL}/teams`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load teams:" + error);
  }
}
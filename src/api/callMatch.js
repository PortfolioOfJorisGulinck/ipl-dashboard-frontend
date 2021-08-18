import axios from "axios";
import { REST_URL } from "./RESTurl";

export async function getMatchesOfTeamByYear(teamName, year) {
  try {
    const response = await axios.get(`${REST_URL}/teams/${teamName}/matches?year=${+year}`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load matches:" + error);
  }
}
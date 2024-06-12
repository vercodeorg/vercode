import { cookie } from "~/service/cookies";
import { IUserExerciseById } from "~/types/interfaces/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const accessToken = cookie.get(null, "auth_token");

export const getExercise = async (
  userId: number | undefined,
  exerciseId: number,
): Promise<IUserExerciseById> => {
  const url = API_URL + `users/${userId}/exercise/${exerciseId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

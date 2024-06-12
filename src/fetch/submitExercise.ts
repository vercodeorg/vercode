import { cookie } from "~/service/cookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const accessToken = cookie.get(null, "auth_token");

export const submitExercise = async (
  userExerciseId: number | undefined,
  codeResult: string | undefined,
) => {
  const url = API_URL + "users-exercises/submit/" + userExerciseId;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ code: codeResult }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

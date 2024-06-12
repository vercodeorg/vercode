import { cookie } from "~/service/cookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const accessToken = cookie.get(null, "auth_token");

export const unlockProject = async (
  usersProjectsId: number | undefined,
  projectId: number,
): Promise<{ success: boolean; message: string }> => {
  const url =
    API_URL + `users-projects/${usersProjectsId}/project/${projectId}`;
  const response = await fetch(url, {
    method: "POST",
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

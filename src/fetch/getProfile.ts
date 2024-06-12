export async function getProfile(token: string) {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + "auth/profile";
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data: " + res.status);
    }
    return res.json();
  } catch (err) {
    console.error("Error: " + err);
  }
}

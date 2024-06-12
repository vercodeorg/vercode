type SignInRequestData = {
  email: string;
  password: string;
};

export async function signInRequest(data: SignInRequestData) {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + "auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data: " + response.status);
    }
    return response.json();
  } catch (err) {
    console.error("Error: " + err);
  }
}

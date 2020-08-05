export async function accounts() {
  const url = "https://api.up.com.au/api/v1/accounts";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.token}`,
    },
  });
  return response.json();
}

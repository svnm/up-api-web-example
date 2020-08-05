export async function transactions(
  url = "https://api.up.com.au/api/v1/transactions"
) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.token}`,
    },
  });
  return response.json();
}

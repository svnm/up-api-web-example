export async function transaction(id: string) {
  const url = `https://api.up.com.au/api/v1/transactions/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.token}`,
    },
  });
  return response.json();
}

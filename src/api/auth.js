export async function authUser(user, action) {
  const url = `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
}

export async function fetchData(link) {
  const resp = await fetch(link);
    console.log("l'gchfhghcgf");

  if (resp.ok) {
    return resp.json();
  }
  throw new Error(`fetch ${link} error`);
}

const baseUrl = "http://localhost:6660/i";

export const notoken = async (endponit, data) => {
  const url = `${baseUrl}/${endponit}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
};

export const yesToken = async (endponit, data = "", method = "GET") => {
  
  const url = `${baseUrl}/${endponit}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET" || method === "DELETE") {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    });
    return await resp.json();
  }else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  }
  
};
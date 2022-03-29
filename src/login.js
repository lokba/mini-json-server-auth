const form = document.querySelector("form");

form.addEventListener("submit", handleLoginFormSubmit);

async function handleLoginFormSubmit(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const data = JSON.stringify({ email, password });

  try {
    const response = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then((res) => res.json());

    const {
      accessToken,
      user: { id },
    } = response;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("id", id);

    window.location.href = "/index.html";
  } catch (e) {
    alert(e);
  }
}

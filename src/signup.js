const form = document.querySelector("form");

form.addEventListener("submit", handleSignupFormSubmit);

async function handleSignupFormSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const data = JSON.stringify({ name, email, password });

  try {
    const response = await fetch("http://localhost:3000/signup", {
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

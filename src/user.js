const id = localStorage.getItem("id");

async function getUserInfo() {
  const response = await fetch(
    `http://localhost:3000/users/${id}`
  ).then((res) => res.json());

  const { email, name } = response;
  return { email, name };
}

async function renderUserInfo() {
  if (id) {
    try {
      const { name, email } = await getUserInfo();

      const $name = document.querySelector("#name");
      const $email = document.querySelector("#email");

      $name.textContent = name;
      $email.textContent = email;
    } catch (e) {
      alert(e);
    }
  }
}

renderUserInfo();

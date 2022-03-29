const id = localStorage.getItem("id");

async function getUserName() {
  const response = await fetch(
    `http://localhost:3000/users/${id}`
  ).then((res) => res.json());
  const { name } = response;
  return name;
}

async function renderHome() {
  if (id) {
    try {
      const name = await getUserName();
      const template = `
      <a href="/user.html">
        <button>내 정보</button>
      </a>
      <a href="">
        <button id="logout-button">로그아웃</button>
      </a>
      <p>👋🏼<span id="user-name">${name}</span>님 안녕하세요</p>
    `;
      const main = document.querySelector("main");
      main.replaceChildren();
      main.insertAdjacentHTML("beforeend", template);
      addLogoutEvent();
    } catch (e) {
      alert(e);
    }
  }
}

function addLogoutEvent() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", clearLocalStorage);
}

function clearLocalStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("id");
  window.location.reload();
}

renderHome();

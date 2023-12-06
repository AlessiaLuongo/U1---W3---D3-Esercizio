const pageForm = document.getElementById("my-form");

pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Comincio a raccogliere i dati del form");

  const myInput = document.getElementById("my-input");

  console.log(myInput.value);

  alert("sapevo di doverti star dietro anche oggi");

  const myListItem = document.createElement("li");
  myListItem.innerText = myInput.value;

  document
    .querySelector("ul")
    .appendChild(myListItem)
    .addEventListener("click", function (e) {
      console.log(e);
      if (e.target.style.textDecoration !== "line-through") {
        e.target.style.textDecoration = "line-through";
      } else {
        e.target.style.textDecoration = "none";
      }
    });

  myInput.value = "";
});

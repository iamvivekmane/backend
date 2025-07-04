let button = document.getElementById("btn");
button.addEventListener("click", () => {
  console.log("I am getting clicked");

  fetch("/clicked", { method: "POST" })
    .then(function (response) {
      if (response.ok) {
        console.log("Click was recorded");
        return;
      }
      throw new Error("Request failed.");
    })
    .catch(function (error) {
      console.log(error);
    });
});

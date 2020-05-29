const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "/resources/images/coffee1.jpg" },
  { name: "Voluptatem", image: "/resources/images/coffee2.jpg" },
  { name: "Explicabo", image: "/resources/images/coffee3.jpg" },
  { name: "Rchitecto", image: "/resources/images/coffee4.jpg" },
  { name: " Beatae", image: "/resources/images/coffee5.jpg" },
  { name: " Vitae", image: "/resources/images/coffee6.jpg" },
  { name: "Inventore", image: "/resources/images/coffee7.jpg" },
  { name: "Veritatis", image: "/resources/images/coffee8.jpg" },
  { name: "Accusantium", image: "/resources/images/coffee9.jpg" },
];
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
};
document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
};
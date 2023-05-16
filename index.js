const lists = document.querySelectorAll("li");
lists.forEach(list => {
    list.style.listStyleType = "none";
});

const header = document.querySelector("h1");
header.style.textAlign = "center";
header.style.color = "white";
header.style.backgroundColor = "black";
header.style.margin = "0px";
header.style.padding = "20px";

const filmListElement = document.querySelector("#filmList");
filmListElement.style.display = "flex";
filmListElement.style.justifyContent = "space-evenly";
filmListElement.style.backgroundColor = "blue";
filmListElement.style.color = "white";

const infos = document.querySelectorAll(".infos");

const filmElement = document.querySelectorAll("#film");
filmElement.forEach((film) => {
    film.onclick = () => {
        film.nextElementSibling.toggleAttribute("hidden");
    };
});






  

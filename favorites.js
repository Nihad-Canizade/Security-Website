let id = new URLSearchParams(window.location.search).get("id");
let favorites = document.getElementById('favorites');


fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            favorites.innerHTML += `
    <div class="sec2-box">
    <i class="bi bi-heart" onclick = "addFavorite(${element.id})" style="cursor: pointer;"></i>
    <img src="${element.image}" alt="Image">
    <div class="sec2-box-p1">${element.name}</div>
    <div class="sec2-box-p2">${element.description}</div>
 </div>
    `
        })
    })
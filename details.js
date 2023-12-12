let id = new URLSearchParams(window.location.search).get("id");
let sec2Boxs = document.getElementById('sec2Boxs');


fetch(`http://localhost:3000/boxs/${id}`)
    .then(res => res.json())
    .then(data => {
        sec2Boxs.innerHTML += `
        <div class="sec2-box">
        <i class="bi bi-heart"></i>
        <img src="${data.image}" alt="Image">
        <div class="sec2-box-p1">${data.name}</div>
        <div class="sec2-box-p2">${data.description}</div>
        <div class = "sec2-box-btns">
        </div>
     </div>
    `
    })
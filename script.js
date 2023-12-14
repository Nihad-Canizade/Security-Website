// Scroll Header - Navbar
let HeaderNavbar = document.getElementById('HeaderNavbar');
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        HeaderNavbar.style.backgroundColor = "black";
        HeaderNavbar.style.opacity = "0.8";
        HeaderNavbar.style.transition = ".3s";

    } else {
        HeaderNavbar.style.backgroundColor = "";
        HeaderNavbar.style.opacity = "";
        HeaderNavbar.style.transition = ".3s";
    }
}


// Section 2 JSON
let sec2Boxs = document.getElementById('sec2Boxs');

function getDataJson() {
    fetch('http://localhost:3000/boxs')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                sec2Boxs.innerHTML += `
            <div class="sec2-box">
            <i class="bi bi-heart-fill" onclick = "addFavorite(${element.id})" style="cursor: pointer;"></i>
            <img src="${element.image}" alt="Image">
            <div class="sec2-box-p1">${element.name}</div>
            <div class="sec2-box-p2">${element.description}</div>
            <div class = "sec2-box-btns">
            <button class = "sec2-box-btn"><a href = "./details.html?id=${element.id}" target = "_blank">View Details</a></button>
            <button class = "sec2-box-btn" onclick = "boxsDelete(${element.id})")>Delete</button>
            <button class = "sec2-box-btn"><a href = "./update.html?id=${element.id}" target = "_blank">Update</a></button>
            </div>
         </div>
            `
            })
        })
}
getDataJson();


// Boxs delete function
function boxsDelete(id) {
    axios.delete(`http://localhost:3000/boxs/${id}`)
    window.location.reload();
}


// Favorite Function



function addFavorite(id) {
    let biheartfill = document.querySelector(".bi-heart-fill");
    axios.get('http://localhost:3000/boxs/' + id)
        .then(res => {
            axios.post('http://localhost:3000/favorites', res.data)
        })

    biheartfill.classList.toggle("new-heart-class");
}


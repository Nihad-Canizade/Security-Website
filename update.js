let id = new URLSearchParams(window.location.search).get("id");
let sec2Boxs = document.getElementById('sec2Boxs');


fetch(`http://localhost:3000/boxs/${id}`)
    .then(res => res.json())
    .then(data => {
        sec2Boxs.innerHTML += `
        <div class="sec2-box">
        <i class="bi bi-heart"></i>
        <img src="${data.image}" alt="Image">
        <div class="sec2-box-p1"><input type = "text" value = "${data.name}" class = "sec2-input1" id = "input1"></div>
        <div class="sec2-box-p2">"${data.description}"</div>
        <button class = "sec2-box-btn" id = "saveBtn">Save</button>
     </div>
    `

        let saveButton = document.getElementById('saveBtn');

        saveButton.addEventListener('click', () => {

            const nameinput = document.querySelector('#input1');

            fetch('http://localhost:3000/boxs/' + id,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name: nameinput.value }),
                })
                .then(res => res.json())
                .then(data => console.log(data))

            nameinput.value = "";

        }

        )
    })

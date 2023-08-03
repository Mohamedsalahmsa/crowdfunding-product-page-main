let card3 = document.querySelector(".card3");
let arrName= ["Bamboo Stand"," Black Edition Stand" , " Mahogany Special Edition"];
let para   = ["Pledge $25 or more","Pledge $75 or more" , "Pledge $200 or more"];
let arrpara= ["You get an ergonomic stand made of natural bamboo. You've helped us launch<br> our promotional campaign, and you’ll be added to a special Backer member list."," You get a Black Special Edition computer stand and a personal thank you.<br> You’ll  be added to our Backer member list. Shipping is included." , " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal <br> thank you. You’ll be added to our Backer member list. Shipping is included."];
let arrnum=  ["101","64","0"];


for(let i = 0 ; i < 2 ; i++) {
card3.innerHTML += `
<div class="card1" >
<div class="bamboo">
        <h2>${arrName[i]}</h2>
        <p>${para[i]}</p>
</div>

<div class="text">
        <p>${arrpara[i]}</p>
</div>

<div class="last">
        <h2>${arrnum[i]} <span>left</span></h2>
        <button id="selectBtn">Select Reward</button>
    </div>
    </div>



`
}
card3.innerHTML += `
<div class="card1" style="opacity: 0.5">
<div class="bamboo">
        <h2>${arrName[2]}</h2>
        <p>${para[2]}</p>
</div>

<div class="text">
        <p>${arrpara[2]}</p>
</div>

<div class="last">
        <h2>${arrnum[2]}<span>left</span></h2>
        <button style="background-color: gray; cursor: none;">Out of Stock</button>
    </div>
    </div>

`

let card4 = document.querySelector(".card4");

for(let i = 0 ; i < arrnum.length -1 ; i++) {
        card4.innerHTML += `
        <div class="card1" >
        <div class="bamboo">
                <h2 class="h2Circle"></h2>
                <h3>${arrName[i]}</h3>
                <p>${para[i]}</p>
                <div class="last">
        <h4>${arrnum[i]} <span>left</span></h4>
        </div>
        </div>
        
        <div class="text">
                <p>${arrpara[i]}</p>
        </div>

        <hr class="hr none">
        <div class="hrt none">
        <div class="paragraph"
        <p class="pBu">Enter Your pledge</p>
        </div>
        <div class="buttons">
        <button class="btn1"><span>$</span>25</button>
        <button class="btn2">Continue</button>
        </div>
        </div>
        </div>
        `
        }


        card4.innerHTML += `
        <div class="card1" style="opacity: 0.4">
        <div class="bamboo">
                <h2 class="h2Circle"></h2>
                <h3 style="color:black">${arrName[2]}</h3>
                <p>${para[2]}</p>
                <div class="last">
        <h4>${arrnum[2]} <span>left</span></h4>
        </div>
        </div>
        
        <div class="text">
                <p>${arrpara[2]}</p>
        </div>

`


let btnBackProject = document.getElementById("btnBackProject")
let btnclose = document.getElementById("btn-close")

btnBackProject.addEventListener("click", function() {
        card4.classList.remove("none")
        document.querySelector(".Section1").style.opacity = "0.4"
        document.querySelector(".container3").style.opacity = "0.4"

        btnclose.addEventListener("click", function() {
                card4.classList.add("none")
                document.querySelector(".Section1").style.opacity = "1"
                document.querySelector(".container3").style.opacity = "1"
        })        
})


let h2Circle = document.querySelector(".h2Circle");
let hrt = document.querySelector(".hrt");
let hr = document.querySelector(".hr");
let bamboo = document.querySelector(".bamboo");

h2Circle.addEventListener("click" , function() {
        hr.classList.toggle("none")
        hrt.classList.toggle("none")
})


let btn2 = document.querySelector(".btn2")
let btn1 = document.querySelector(".btn1")
let confirm2 = document.querySelector(".confirm")
let btnConfirm = document.querySelector("#btnConfirm")

btn2.addEventListener("click" , function() {
        confirm2.classList.remove("none")
        document.querySelector(".Section1").style.opacity = "0.4"
        document.querySelector(".container3").style.opacity = "0.4"
        card4.classList.add("none")
        btnConfirm.addEventListener("click" , function() {
                window.location.reload()
        })
})

btn1.addEventListener("click" , function() {
        confirm2.classList.remove("none")
        document.querySelector(".Section1").style.opacity = "0.4"
        document.querySelector(".container3").style.opacity = "0.4"
        card4.classList.add("none")
        btnConfirm.addEventListener("click" , function() {
                window.location.reload()
        })
})

let selectBtn = document.querySelector("#selectBtn")
selectBtn.addEventListener("click" , function() {
        card4.classList.remove("none")
        document.querySelector(".Section1").style.opacity = "0.4"
        document.querySelector(".container3").style.opacity = "0.4"

        btnclose.addEventListener("click", function() {
                card4.classList.add("none")
                document.querySelector(".Section1").style.opacity = "1"
                document.querySelector(".container3").style.opacity = "1"
        })      

        scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
        });
})




// ----------------------------------------
let icon = document.querySelector('.icon');
let opens = document.querySelector('.opens');
let closeIcon = document.querySelector('.closeIcon');

icon.addEventListener("click" , function() {
        opens.classList.remove("none")

        closeIcon.addEventListener("click" , function() {
                opens.classList.add("none")
        })
})
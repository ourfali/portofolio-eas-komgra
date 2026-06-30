const hamburger =
document.querySelector(".hamburger");


const menu =
document.querySelector(".nav-menu");


const links =
document.querySelectorAll(".nav-menu a");


const sections =
document.querySelectorAll("section");



// hamburger

hamburger.onclick = ()=>{

menu.classList.toggle("active");

}





// active navbar saat scroll


window.addEventListener("scroll", ()=>{


let current = "";


sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


const sectionHeight = section.clientHeight;



if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

current = section.getAttribute("id");

}


});



links.forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}


});


});

function openModal(id){

document.getElementById(id).style.display="flex";

}



function closeModal(id){

document.getElementById(id).style.display="none";

}




window.onclick = function(event){


if(event.target.classList.contains("modal")){


event.target.style.display="none";


}


}

function sendWhatsApp(){


let nama = document.getElementById("nama").value;

let email = document.getElementById("email").value;

let pesan = document.getElementById("pesan").value;



let nomor = "6285871078523";



let text = 
`Halo, saya ${nama}

Email:
${email}

Pesan:
${pesan}`;



let url =
"https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);



window.open(url,"_blank");

}
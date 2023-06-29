window.addEventListener('scroll', function() {
  var header = this.document.querySelector('header');
  var scrollPosition = window.scrollY;
  if(scrollPosition > 100){
      header.style.opacity = '1';
  } else {
      header.style.opaity = '0';
  }
});

document.getElementById("buttonv").onclick = function () {
location.href = "form/login.html";
};

document.getElementById("buttonz").onclick = function () {
location.href = "form/signup.html";
};

document.getElementById("button0").onclick = function () {/*1*/
location.href = "space/space.html";
};

document.getElementById("button1").onclick = function () {/*2*/
location.href = "anim/animal.html";
};

document.getElementById("button2").onclick = function () {/*3*/
location.href = "home/home.html";
};

document.getElementById("button3").onclick = function () {/*4*/
location.href = "cl.mus/mus.html";
};

document.getElementById("button4").onclick = function () {/*5*/
location.href = "b_w/b_w.html";
};

document.getElementById("button5").onclick = function () {/*6*/
location.href = "forest/forest.html";
};

document.getElementById("button6").onclick = function () {/*7*/
location.href = "advent/advent.html";
};

document.getElementById("button7").onclick = function () {/*8*/
location.href = "tt.trend/tt.html";
};

const modalEl = document.querySelector('.modal');



function openModalm() {
document.getElementById("meditModal").style.display = "block";/*1*/ 
}

function closeModalm() {
document.getElementById("meditModal").style.display = "none";

}

function openModals() {
document.getElementById("sonModal").style.display = "block";/*2*/ 
}

function closeModals() {
document.getElementById("sonModal").style.display = "none";

}

function openModalo() {
document.getElementById("osoznModal").style.display = "block";/*3*/ 
}

function closeModalo() {
document.getElementById("osoznModal").style.display = "none";

}

function openModalk() {
document.getElementById("contaktModal").style.display = "block";/*4*/ 
}

function closeModalk() {
document.getElementById("contaktModal").style.display = "none";
}


document.getElementById("a1").onclick = function () {/*8*/
location.href = "Article/1.html";
};

document.getElementById("a2").onclick = function () {/*8*/
location.href = "Article/2.html";
};

document.getElementById("a3").onclick = function () {/*8*/
location.href = "Article/3.html";
};

document.getElementById("a4").onclick = function () {/*8*/
location.href = "Article/4.html";
};

document.getElementById("a5").onclick = function () {/*8*/
location.href = "Article/5.html";
};

document.getElementById("a6").onclick = function () {/*8*/
location.href = "Article/6.html";
};

document.getElementById("a7").onclick = function () {/*8*/
location.href = "Article/7.html";
};






/*function openModal() {
  document.body.classList.add("stop-scrolling");// Открыть модальное окно
}

function closeModal() {
  document.body.classList.remove("stop-scrolling");// Закрыть модальное окно
}*/


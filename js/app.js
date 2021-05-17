// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  if (!localStorage.money) {
    localStorage.money = 89914;
  }
  if (!localStorage.backers) {
    localStorage.backers = 5007;
  }
  if (!localStorage.width) {
    localStorage.width = 89;
  }
  if (!localStorage.bamboo) {
    localStorage.bamboo = 101;
  }
  if (!localStorage.black) {
    localStorage.black = 64;
  }
  if (!localStorage.mahogany) {
    localStorage.mahogany = 0;
  }
}


//JS for hamburguer menu
const hamb = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__menu');
const testClassExist = document.getElementsByClassName('active__bar');
const imgHamb = document.querySelector('.img_hamb');

function showMenu() {
    menu.classList.toggle('active__bar');
    if (testClassExist.length > 0) {
        imgHamb.setAttribute("src", "images/icon-close-menu.svg");
    }else{
      imgHamb.setAttribute("src", "images/icon-hamburger.svg");
    }
}

hamb.addEventListener('click',showMenu)



//JS for radio buttons
const radioBtns = document.querySelectorAll('.modal-content-back__stand__radio');
const stands = document.querySelectorAll('.modal-content-back__stand');
const pledges = document.querySelectorAll('.modal-content-back__stand__pledge');

radioBtns.forEach(button =>{
    button.addEventListener('click', function() {
      if (button.id == 'no-reward' && button.checked) {
        stands[0].style.border = '2px solid hsl(176, 88%, 32%)';
        pledges[0].style.display = 'flex';

        stands[1].style.border = '';
        pledges[1].style.display = '';
        stands[2].style.border = '';
        pledges[2].style.display = '';
        stands[3].style.border = '';
        pledges[3].style.display = '';
      }else if (button.id == 'bamboo' && button.checked) {
        stands[1].style.border = '2px solid hsl(176, 88%, 32%)';
        pledges[1].style.display = 'flex';

        stands[0].style.border = '';
        pledges[0].style.display = '';
        stands[2].style.border = '';
        pledges[2].style.display = '';
        stands[3].style.border = '';
        pledges[3].style.display = '';
      }else if (button.id == 'black' && button.checked) {
        stands[2].style.border = '2px solid hsl(176, 88%, 32%)';
        pledges[2].style.display = 'flex';

        stands[1].style.border = '';
        pledges[1].style.display = '';
        stands[0].style.border = '';
        pledges[0].style.display = '';
        stands[3].style.border = '';
        pledges[3].style.display = '';
      }else if (button.id == 'mahogany' && button.checked) {
        stands[3].style.border = '2px solid hsl(176, 88%, 32%)';
        pledges[3].style.display = 'flex';

        stands[1].style.border = '';
        pledges[1].style.display = '';
        stands[2].style.border = '';
        pledges[2].style.display = '';
        stands[0].style.border = '';
        pledges[0].style.display = '';
      }
    })
})



//JS Back this project modal
const backBtn = document.querySelector('.card__btn--back');
const backModal = document.querySelector('.modal2');
const closeBackBtn = document.querySelector('.close--back')

const selectReward = document.querySelectorAll('.card__stand__btns__btn');

selectReward.forEach(button =>{
  button.addEventListener('click', openBackModal);
})

function openBackModal() {
    backModal.classList.add('active__modal');
}
backBtn.addEventListener('click',openBackModal);

function closeBackModal() {
  backModal.classList.remove('active__modal');
  stands.forEach(stand => stand.style.border = '');
  pledges.forEach(pledge => pledge.style.display = '');
  radioBtns.forEach(button => button.checked = false)
}
closeBackBtn.addEventListener('click',closeBackModal);


//JS thanks modal
const closeThanks = document.querySelector('#close--thanks');
const modalThanks = document.querySelector('.modal');
const openThanks = document.querySelectorAll('.btn--continue');
function openThankModel() {
  modalThanks.classList.add('active__modal');
  backModal.classList.remove('active__modal');
}

openThanks.forEach(button =>{
  button.addEventListener('click',openThankModel)
})
function closeThankModal() {
    modalThanks.classList.remove('active__modal');
}
closeThanks.addEventListener('click', closeThankModal)



//JS for closing modal
window.onclick = function(event) {
  if (event.target == myModal || event.target == myModal2) {
    modalThanks.classList.remove('active__modal');
    backModal.classList.remove('active__modal');
    stands.forEach(stand => stand.style.border = '');
    pledges.forEach(pledge => pledge.style.display = '');
    radioBtns.forEach(button => button.checked = false)
  }
}

//JS for localStorage values and Update them
let donation = document.querySelectorAll('.modal-content-back__stand__btns__input') 
openThanks.forEach(button =>{
    button.addEventListener('click', function(){
      if (button.id == 'btn-1') {
        localStorage.backers++;
      }else if (button.id == 'btn-2') {
        localStorage.backers++;
        localStorage.money = Number(localStorage.money) + Number(donation[0].value);
        localStorage.width = Number(localStorage.width) + (Number(donation[0].value))/100000;
        localStorage.bamboo--;
      }else if (button.id == 'btn-3') {
        localStorage.backers++;
        localStorage.money = Number(localStorage.money) + Number(donation[1].value);
        localStorage.width = Number(localStorage.width) + (Number(donation[1].value))/100000;
        localStorage.black--;
      }else if (button.id == 'btn-4') {
        localStorage.backers++;
        localStorage.money = Number(localStorage.money) + Number(donation[2].value);
        localStorage.width = Number(localStorage.width) + (Number(donation[2].value))/100000;
        localStorage.mahogany--;
      }
      
    })
})



const moneyTitle = document.querySelector('.money');
const backersTitle = document.querySelector('.backers');
const bar = document.querySelector('.card__bar');
const amountLeftBamboo = document.querySelector('.left-1');
const amountLeftBlack = document.querySelector('.left-2');
const amountLeftMahogany = document.querySelector('.left-3');
const amountLeftBambooStand = document.querySelector('.left--1');
const amountLeftBlackStand = document.querySelector('.left--2');
const amountLeftMahoganyStand = document.querySelector('.left--3');


moneyTitle.textContent = `$${localStorage.money}`;
backersTitle.textContent = localStorage.backers;
bar.style.width = `${localStorage.width}%`;
amountLeftBamboo.innerHTML = `${localStorage.bamboo} <span>left</span>`;
amountLeftBlack.innerHTML = `${localStorage.black} <span>left</span>`;
amountLeftMahogany.innerHTML = `${localStorage.mahogany} <span>left</span>`;
amountLeftBambooStand.innerHTML = `${localStorage.bamboo} <span>left</span>`;
amountLeftBlackStand.innerHTML = `${localStorage.black} <span>left</span>`;
amountLeftMahoganyStand.innerHTML = `${localStorage.mahogany} <span>left</span>`;



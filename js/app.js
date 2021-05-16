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
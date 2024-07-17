'use strict';
//get elements from html
const body = document.querySelector('body'),
  hourHand = document.querySelector('.hand'),
  minuteHand = document.querySelector('.minutes'),
  secondHand = document.querySelector('.seconds'),
  digital = document.querySelector('.digital'),
  modeToggle = document.querySelector('.mode-toggle');

//add event listener to mode toggle
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const updateTime = () => {
  //get current time and calculate degrees for clock hands
  let date = new Date(),
    secondsToDegree = (date.getSeconds() / 60) * 360,
    minutesToDegree = (date.getMinutes() / 60) * 360,
    hourToDegree = (date.getHours() / 12) * 360;
  // hours = ,
  // minutes = ;

  //rotate clock hands to according to degree based on current time
  secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesToDegree}deg )`;
  hourHand.style.transform = `rotate(${hourToDegree}deg)`;

  //digital clock setup
  let hours = String(date.getHours()).padStart(2, '0'),
    minutes = String(date.getMinutes()).padStart(2, '0'),
    seconds = String(date.getSeconds()).padStart(2, '0');
  digital.innerText = `${hours} : ${minutes} : ${seconds}`;
};
//call updateTime to set clock hand every second
setInterval(updateTime, 1000);

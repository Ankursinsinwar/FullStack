const head = document.getElementById('heading');

head.style.color = 'blue'
head.style.border = '3px solid aqua'

console.log(head);

const city = document.getElementsByClassName('city');

console.log(city);

const para = document.getElementsByTagName('p');

console.log(para);

for (let City of city)
    console.log(City)

const x = document.querySelector('.city');
x.style.color = 'red';
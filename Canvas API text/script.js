const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font='36px arial';
ctx.strokeText('canvas text', 50,50);

ctx.fillStyle = 'red'
ctx.font='48px gorgia';
ctx.fillText('canvas text',50, 150);
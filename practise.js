{\rtf1\ansi\ansicpg1252\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // No need to change the following code\
// The area object defines the div in which the balls will be created\
const area = \{\
  element: document.getElementById('area'),\
  width: 600,\
  height: 400,\
\};\
const ball = \{\
  element: document.getElementById('ball'),\
  width: 100,\
  height: 100,\
\};\
// No need to change the following code\
// The initialize function creates the area div on the Html page\
function initialize() \{\
  area.element.style.width = area.width + 'px';\
  area.element.style.height = area.height + 'px';\
  document.body.appendChild(area.element);\
\}\
\
// No need to change the following code\
// The moveTo function moves a given ball to a set x and y coordinates on the page\
function moveTo(ball, x, y) \{\
  ball.element.style.left = x + 'px';\
  ball.element.style.top = y + 'px';\
\}\
\
// No need to change the following code\
// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders\
function changeDirectionIfNecessary(ball, x, y) \{\
  if (x < 0 || x > area.width - ball.width) \{\
    ball.dx = -ball.dx;\
  \}\
  if (y < 0 || y > area.height - ball.height) \{\
    ball.dy = -ball.dy;\
  \}\
\}\
\
// TODO: implement the create function\
function create(color, dx, dy) \{\
  const newBall = Object.create(this);\
\
  // TODO: Set newBall properties: dx, dy, width, height\
   newBall.dx = dx;\
   newBall.dy = dy;\
   newBall.width = ball.width + 'px';\
   newBall.height = ball.height + 'px';\
   \
\
  // TODO: set the newBall.element property and initialize it to a Html element "div"\
   newBall.element = document.createElement("div");\
\
  // TODO: set the backgroundColor, width and height style properties for newBall.element\
  newBall.element.backgroundColor = color;\
  newBall.element.width = ball.width;\
  newBall.element.height = ball.height;\
  // This line set the CSS class for newBall.element. No need to change this line\
  newBall.element.className += ' ball';\
\
  // TODO: set the width and height of newBall based on newBall.element\
  // Hint: use the Javascript parseInt() function to convert a string value to integer\
   newBall.width = parseInt(newBall.element.width);\
   newBall.height = parseInt(newBall.element.height);\
  // TODO: use the Javascript appendChild() function to add newBall.element to the area element\
    document.body.appendChild(newBall.element);\
  return newBall;\
\}\
\
// TODO: implement the update function\
function update(ball, x, y) \{\
  // TODO: use the moveTo() function to move the ball\
  // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms\
     while(changeDirectionIfNecessary==true)\{\
        moveTo();   \
      \}\
      setTimeout(update, 100);\
\}\
\
// Uncomment these lines for step 1 of the activity\
// This is expected to create 3 balls within the area div\
\
initialize();\
const ball1 = create('blue', 4, 3);\
const ball2 = create('red', 1, 5);\
const ball3 = create('green', 2, 2);\
moveTo(ball1, 1, 1);\
moveTo(ball2, 10, 10);\
moveTo(ball3, 20, 20);\
\
// Uncomment these lines for step 2 of the activity\
// This is expected to make the 3 balls move around the area div\
\
update(ball1, 70, 0);\
update(ball2, 20, 200);\
update(ball3, 300, 330);\
\
// Do not change code past this point\
if (typeof module !== 'undefined') \{\
  module.exports = \{ update, create, changeDirectionIfNecessary, moveTo, area \};\
\}}
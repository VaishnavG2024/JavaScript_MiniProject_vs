let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
// let x = 0;
const spriteWidth = 575; // acc to my spritesheet width these are 6876px so 6876/12=573.
const spriteHeight = 523; // acc to my spritesheet height these are 5230px so 5230/10rows=523.
// let framex = 0;
// let framey = 1;// this axis is change row so we can change the frame.
let gameFrame = 0;
const staggerFrame = 5;// by increase this value we can slow or speed up the dog frame.
const spriteAnimations = [];
const animationstates = [
    {
        name: 'idle' ,
        frames: 7,
    },
    {
        name: 'jump' ,
        frames: 7,
    },
    {
        name: 'fall' ,
        frames: 7,
    },
    {
        name: 'run' ,
        frames: 9,
    },
    {
        name: 'dizzy' ,
        frames: 11,
    },
    {
        name: 'sit' ,
        frames: 5,
    },
    {
        name: 'roll' ,
        frames: 7,
    },
    {
        name: 'bite' ,
        frames: 7,
    },
    {
        name: 'ko' ,
        frames: 12,
    },
    {
        name: 'getHit' ,
        frames: 4,
    }
];
animationstates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionx = j * spriteWidth;
        let positiony = index * spriteHeight;
        frames.loc.push({x: positionx, y: positiony});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);//clear Reactangle.
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length;// we calc gameframe and staggerframe and increase gameframe until we got the 1 because we want the frame by frame.
    let framex = spriteWidth * position;
    let framey = spriteAnimations[playerState].loc[position].y;



    //ctx.fillRect( 100, 50, 100, 100);
    // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);// we can set here source and destination.
    ctx.drawImage(playerImage, framex, framey, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);// co-ordinate x and y set 0 and 0 but we can  set width and height here not the co-ordinate.
    // if (framex < 6)framex++;
    // else framex = 0;



    gameFrame++;
    requestAnimationFrame(animate);//we use builtin function for run the function 
};
animate();

let alive = 'undefined';
let rank = 'pawn';
let color = 'black';
let positionX = '0';
let positionY = '0';
let check = false;
let checkmate = false;
let piece = ['alive', 'rank', 'color', 'positionX', 'positionY']

let make = alive.replace('false', 'true' );
let kill = alive.replace('true', 'false');

if (alive){
console.log ('made')
}else{
console.log ('killed')
}

let pawn = 1
let rook = 2
let bishop = 3
let knight = 4
let queen = 5
let king = 6

if (rank === pawn){

}

if (rank === rook){

}

if (rank === bishop){

}

if (rank === knight){

}

if (rank === king){

}

if (rank === queen){

}

// board drawing
beginpath(0,100);
moveto(800,100);
beginpath(0,200);
moveto(800,200);
beginpath(0,300);
moveto(800,300);
beginpath(0,400);
moveto(800,400);
beginpath(0,500);
moveto(800,500);
beginpath(0,600);
moveto(800,600);
beginpath(0,700);
moveto(800,700);
beginpath(100,0);
moveto(100,800);
beginpath(200,0);
moveto(200,800);
beginpath(300,0);
moveto(300,800);
beginpath(400,0);
moveto(400,800);
beginpath(500,0);
moveto(500,800);
beginpath(600,0);
moveto(600,800);
beginpath(700,0);
moveto(700,800);
beginpath(800,0);
moveto(800,800);


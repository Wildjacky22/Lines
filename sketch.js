function setup() {
createCanvas( windowWidth , windowHeight );

 }

function draw() {

r = random( 0 , 35 );
g = random( 0 , 35 );
b = random( 0 , 35 );

stroke( r , g , b , 35 );
line( windowWidth/2 , windowHeight/2 , mouseX , mouseY );

}

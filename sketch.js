 var N = 50;

var B1;
var B2;


function setup() {
  createCanvas( windowWidth , windowHeight );
  
  B1 = new Array(N);
  B2 = new Array(N);

  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();

    }
  

 
  var r = random( 0 , 30);
  var g = random( 0 , 30);
  var b = random( 0 , 30);
 
 //background( r , g , b );
 
 //background( 0 , 0 , 0 );
 
  stroke( r , g , b );
  //noStroke();
 

}

function draw() {

  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
  
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);
   
   stroke( 0 , g , 0 , 2 );
   line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
  }
}

  


var Ball = function(){
  this.pos = createVector( random( 0 , width ) , random( 0 , height ) );

//this.pos = createVector( windowWidth/2 , windowHeight/2 );
 
 //this.pos = createVector( 0 , 0 );
 
  this.v = p5.Vector.random2D();
  
  this.v.mult( random( 0.5 , 1 ) );
  
  this.evolveDraw =function() {
    this.pos.add( this.v );
  
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);

   
    point( this.pos.x , this.pos.y , 20 );
   
    
  };
  
};


function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  }
 }


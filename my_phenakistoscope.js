const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(12);

  pScope.load_image_sequence("draw_pea" , "png", 6); // creating the sequence for the peas
  pScope.load_image_sequence("draw_carrot" , "PNG", 2); // creating the sequence for the peas

}

function setup_layers(pScope){

  new PLayer(null, 245, 245, 170 );  //lets us draw the whole circle background, ignoring the boundaries

  var draw_peaSequence = new PLayer(draw_pea);
  draw_peaSequence.mode( RING );
  draw_peaSequence.set_boundary( 0, 1000 );

  var draw_carrotSequence = new PLayer(draw_carrot);
  draw_carrotSequence.mode(SWIRL(3));
  draw_carrotSequence.set_boundary( 0, 1000 );

  var backgroundDetail = new PLayer(dots);
  backgroundDetail.mode(SWIRL(3));
  backgroundDetail.set_boundary(620, 1000);

  var outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(580, 530);

  var outerRing = new PLayer(outsideRing2);
  outerRing.mode(RING);
  outerRing.set_boundary(900, 1000);


  var layer2 = new PLayer(squares);
   layer2.mode( RING );
   layer2.set_boundary( 0, 400 );

   //var centralCircle = new PLayer(centerCircle); // New layer for th circle
  //centralCircle.mode(RING);
  //centralCircle.set_boundary(450, 500); 
}

//drawing the image from the sequence
function draw_pea(x, y, animation, pScope){
  scale(1);
 pScope.draw_image_from_sequence("draw_pea", x, -700, animation.frame); 
}

function draw_carrot(x, y, animation, pScope){
  scale(.3);
 pScope.draw_image_from_sequence("draw_carrot", -400, -900, animation.frame); 
}

  function outsideRing (x,y,animation,pScope){
    pScope.fill_background(80, 50, 0);
  
}
 
function outsideRing2 (x,y,animation,pScope){
  pScope.fill_background(0, 90 ,120);

}
//function centerCircle(x, y, animation, pScope) {
  //let circleSize = 400;
 // fill(0, 10, 0); 
  //ellipse(x, y, circleSize, circleSize);
//}
//sscale(animation.wave(2));
function dots(x,y,animation, pScope){
  var event =100 * animation.frame;
  var dotsSize = 30; 
  noStroke()
  fill(70, 25, 0);
  ellipse(100, 900, dotsSize, );
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
}


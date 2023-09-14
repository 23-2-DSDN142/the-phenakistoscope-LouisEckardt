const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(6);
  pScope.load_image_sequence("draw_pea" , "png", 6);

}

function setup_layers(pScope){

  new PLayer(null, 245, 245, 220 );  //lets us draw the whole circle background, ignoring the boundaries

  var draw_peaSequence = new PLayer(draw_pea);
  draw_peaSequence.mode( RING );
  draw_peaSequence.set_boundary( 0, 1000 );

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );
}


function draw_pea(x, y, animation, pScope){
  scale(1.5);
 pScope.draw_image_from_sequence("draw_pea", x, -400, animation.frame); 

  //sscale(animation.wave(2));

  
  

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  line (100, 100, 100, 100);
 
}

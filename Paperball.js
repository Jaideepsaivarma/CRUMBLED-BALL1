class Paper {
  constructor(x,y,width,height){
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0.4,
         density:1.2
     }
     this.body = Bodies.circle(x,y,width,height,options);
     this.width = width;
     World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x, pos.y, this.width, this.height);
  }
}
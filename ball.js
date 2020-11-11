class Ball {
  constructor(x, y, diameter) {
    var options = {
        
        isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:2.5
    }
    this.body = Bodies.circle(x, y, diameter-20, options);
    this.diameter=diameter
    this.image=loadImage("paper.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
   
    fill(255);
    stroke("red")
    strokeWeight(4)
    ellipseMode(RADIUS)  
    ellipse(0,0,this.diameter-20,this.diameter-20)
    imageMode(CENTER)  
    image(this.image,0,0,this.diameter+20,this.diameter+20);
    pop();
  }
};

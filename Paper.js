class Paper {
    constructor(x, y,radius) {
     
        var options ={
         isStatic:false,
         restitution:0.2,
         friction:0.3,
         density:1.2
        }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      ellipseMode(CENTER);
      fill("purple");
      ellipse(pos.x, pos.y,this.radius);
      
    }
  }
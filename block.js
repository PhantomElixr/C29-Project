class Block {
    constructor(x, y, color) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 20, 50, options);
      this.width = 20;
      this.height = 50;
      this.color = color;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
        stroke("orange");
        fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
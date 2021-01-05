class Slingshot {
    constructor(body1,point) {
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness:0.04,
            lenght:10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display() {
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
     fly() {
         this.sling.bodyA = null;
     }
};
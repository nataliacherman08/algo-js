class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let circle = new Circle(0, 0, 10);
console.log(circle);
console.log("The circle surface is: " + circle.surface);

circle.move(8, 10);
console.log("If you move the circle of x8 and y10, the circle cordinates will become :");
console.log(circle);
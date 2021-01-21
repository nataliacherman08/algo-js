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
        return 2 * Math.PI * radius;
    }
}

let circleSurface = new Circle(0, 0, 6);
console.log(circleSurface.surface);
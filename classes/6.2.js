class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
        /*The both rectangles have a starting point (x,y) with a width and a length.
        We have to assign all that values.
        According to the assigned values, we have to determine if the both rectangles collide or not.*/

    collides(otherRectangle) {
        //The width/length of the Rectangle1 is < than the initial position of Rectangle2.
        if ((this.topLeftXPos + this.width < otherRectangle.topLeftXPos) 
        &&
        (this.topLeftYPos + this.length < otherRectangle.topLeftYPos)
        &&
        //The width/length of the Rectangle1 is > than the width/length of the Rectangle2.
        (this.topLeftXPos + this.width > otherRectangle.width) 
        &&
        (this.topLeftYPos + this.length > otherRectangle.length)
            ){
                return false;
            } else{
                return true;
            }
    }
}

let Rectangle1 = new Rectangle(7,7,3,2);
let Rectangle2 = new Rectangle(7,7,2,3);
console.log(Rectangle1.collides(Rectangle2));

let Rectangle3 = new Rectangle(9,9,7,4);
let Rectangle4 = new Rectangle(20,20,7,9);
console.log(Rectangle3.collides(Rectangle4));
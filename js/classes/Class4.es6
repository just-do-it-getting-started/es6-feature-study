class Shape {
	constructor (id, x, y) {
		this.id = id;
		this.move(x, y);
	}
	move (x, y) {
		this.x = x;
		this.y = y;
	}

    toString () {
	    return `Shape(${this.id})`
    }
}
class Rectangle extends Shape {
	constructor (id, x, y, width, height) {
		super(id, x, y);
	}
	toString () {
		return "Rectangle > " + super.toString();
	}
}
class Circle extends Shape {
	constructor (id, x, y, radius) {
		super(id, x, y);
	}
	toString () {
		return "Circle > " + super.toString();
	}
}
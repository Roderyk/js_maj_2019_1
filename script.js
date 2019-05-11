class Punkt {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    przesun (vx, vy) {
        this.x += vx;
        this.y += vy;
    }
}
class Odcinek {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    przesun (vx, vy) {
        this.a.przesun(vx, vy);
        this.b.przesun(vx, vy);
    }
    dlugosc () {
        return Math.sqrt(Math.pow((this.b.x - this.a.x), 2) + Math.pow((this.b.y - this.a.y), 2))
    }
}


class Trojkat {
    constructor (a, b, c) {
        this.o1 = new Odcinek(a, b);
        this.o2 = new Odcinek(b, c);
        this.o3 = new Odcinek(c, a);
    }
    przesun (vx, vy) {
        this.o1.a.przesun(vx, vy);
        this.o1.b.przesun(vx, vy);
        this.o2.b.przesun(vx, vy);
    }
    obwod () {
        return o1.dlugosc() + o2.dlugosc() + o3.dlugosc()
    }
}

class Wielokat {
    constructor () {

    }
}
var p1 = new Punkt(0, 0);
var p2 = new Punkt(2, 2);
var p3 = new Punkt(0, 5);
var o1 = new Odcinek(p1, p2);
var o2 = new Odcinek(p2, p3);
var o3 = new Odcinek(p3, p1);
var t1 = new Trojkat(p1, p2, p3);

console.log(p1)
console.log(p2)
o1.przesun(5, 10);
console.log(o1)
var test = o1.dlugosc()
console.log(test)
console.log(t1)
// var test2 = t1.obwod()
// console.log(test2)
t1.przesun(100, 150);
console.log(t1)


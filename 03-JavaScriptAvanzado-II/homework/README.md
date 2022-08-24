# Homework JavaScript Avanzado II

## Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
String.prototype.repeatify = function (entero){
    var repeat = '';
    var count = 0;
    if (entero <= 0) {return ""}
    else {
        while (count!=entero){
            count ++;
           repeat = repeat + this;
            console.log(repeat)
        }
        console.log(repeat)
        return repeat
    }
}

console.log('hola'.repeatify(3));   //holaholahola
```

### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
//Creo la función constructora Shape
function Shape (type){
    this.type = type;
}
//Inserto en su prototype la función getType
Shape.prototype.getType= function () {
    return this.type
}

//Creo Triangle e indico en su prototipo que es una Shape y su tipo Triangle
//Es decir que el prototipo de Triangle va a ser Shape 
Triangle.prototype = new Shape("Triangle");

//Agrego elementos a la función constructora triangle
function Triangle (a, b, c, h){  
    this.type = 'Triangle';
    this.a = a;
    this.b = b;
    this.c = c;
    this.h = h;
}
//Creo la función getPerimeter dentro del prototipo de Triangle
Triangle.prototype.getPerimeter= function(a, b, c){
    return (this.a + this.b + this.c)
}

//Creo la función getArea dentro del prototype de Triangle
Triangle.prototype.getArea = function (a, b, c){
    let h = Math.sqrt(Math.pow (this.a,2) - Math.pow ((this.b/2),2));
    let area = (this.a * h) / 2;
    return area
}

> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript

Circle.prototype = new Shape("Circle");

function Circle (a){
    this.type="Circle";
    this.a = a;
}

Circle.prototype.getPerimeter = function (){
    return (2 * Math.PI * this.a)
}

Circle.prototype.getArea = function (){
    return (Math.PI * Math.pow(this.a,2));
}

> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.

```javascript

Square.prototype = new Shape("Square");

function Square (a){
    this.type="Square";
    this.a = a;
}

Square.prototype.getPerimeter = function (){
    return (4 * this.a)
}

Square.prototype.getArea = function (){
    return (Math.pow(this.a,2));
}

> var d = new Square(4);
> d instanceof Square;
// true
> Shape.prototype.isPrototypeOf(d);
// true
> d.getPerimeter();
// 16
> d.getType();
// "Square"
> d.getArea();

```

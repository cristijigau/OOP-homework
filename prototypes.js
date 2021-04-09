function Gadget(price, color, rezolutieEcran) {
  this.price = price;
  this.color = color;
  this.rezolutieEcran = rezolutieEcran;
}
//method1()
Gadget.prototype.showPrice = function () {
  console.log(` Price: ${this.price} lei`);
};
//method2()
Gadget.prototype.showRezolutieEcran = function () {
  console.log(` rezolutieEcran: ${this.rezolutieEcran}`);
};

function Laptop(price, color, rezolutieEcran, iluminareTastatura) {
/* We want the Laptop() constructor to take the same parameters as the Gadget() constructor 
it is inheriting from, so we specify them all as parameters in the call() invocation. */
  Gadget.call(this, price, color, rezolutieEcran);
  this.iluminareTastatura = iluminareTastatura;
}
Laptop.prototype = Object.create(Gadget.prototype);
Laptop.prototype.constructor = Laptop;

function SmartPhone(price, color, rezolutieEcran, rezolutieSenzor) {
  Gadget.call(this, price, color, rezolutieEcran);
  this.rezolutieSenzor = rezolutieSenzor;
}
SmartPhone.prototype = Object.create(Gadget.prototype);
SmartPhone.prototype.constructor = SmartPhone;

const iPhone = new SmartPhone('12999', 'white', '1170 x 2532 px', 'Dual: 12 + 12 Mpx');
const lenovo = new Laptop('9990', 'black', '1920 x 1080 px', true);

iPhone.showPrice();
iPhone.showRezolutieEcran();

lenovo.showPrice();
lenovo.showRezolutieEcran();


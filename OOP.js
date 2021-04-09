class Gadget {
  constructor(price, color, rezolutieEcran) {
    this.price = price;
    this.color = color;
    this.rezolutieEcran = rezolutieEcran;
  }
  showPrice() {
    console.log(` Price: ${this.price} lei`);
  }
  showRezolutieEcran() {
    console.log(` rezolutieEcran: ${this.rezolutieEcran}`);
  }
}

class Laptop extends Gadget {
  constructor(price, color, rezolutieEcran, iluminareTastatura) {
    super(price, color, rezolutieEcran);
    this.iluminareTastatura = iluminareTastatura;
  }
}

class SmartPhone extends Gadget {
  constructor(price, color, rezolutieEcran, rezolutieSenzor) {
    super(price, color, rezolutieEcran);
    this.rezolutieSenzor = rezolutieSenzor;
  }
}


const iPhone = new SmartPhone('12999', 'white', '1170 x 2532 px', 'Dual: 12 + 12 Mpx');
const lenovo = new Laptop('9990', 'black', '1920 x 1080 px', true);

iPhone.showPrice();
iPhone.showRezolutieEcran();

lenovo.showPrice();
lenovo.showRezolutieEcran();

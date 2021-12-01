// 1. interface first glance

interface Product {
  name: string;
  type: string;
  serialno: string;
}

let product1: Product = {
  name: 'blue eyes',
  type: 'monster',
  serialno: '00000000001',
};

// 2. interface with class, extending interfaces

interface Rared {
  reality?: string;
}

interface Priced {
  readonly price: number;
}

interface tradale extends Priced, Rared {
  trade: (payment: number) => Boolean;
}

class Card implements tradale {
  name: string = '';
  type: string = '';
  serialno: string = '';
  price = 0;

  constructor(n: string, t: string, seri: string, p: number) {
    this.name = n;
    this.type = t;
    this.serialno = seri;
    this.price = p;
  }

  trade(payment: number) {
    return payment >= this.price ? true : false;
  }
}

const c1 = new Card('blue eyes', 'monster', '0000001', 9990);
console.log(c1.price);

class YGOCard extends Card {
  constructor(n: string, t: string, seri: string, p: number) {
    super(n, t, seri, p);
  }
}

// 3. interface as function types

interface AddFn {
  (val1: number, val2: number): number;
}

// 4.

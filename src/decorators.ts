//1. first glance in decorators

function Logger(constructor: Function) {
  //console.log('Logging');
  //console.log(constructor);
}

@Logger
class Customer {
  name = 'eric';
  constructor(n: string) {
    this.name = n;
    //console.log('Creating a Customer');
  }
}

//2. function decorators

function LoggerFactory(text: string) {
  return function (constructor: Function) {
    //console.log(text);
    //console.log(constructor);
  };
}

@LoggerFactory('logging tool working')
class Customer2 {
  name = 'eric';
  constructor(n: string) {
    this.name = n;
    //console.log('Creating a Customer');
  }
}

//2. HTML template decorator
function withTemplate(template: string, value: string, hookedId: string) {
  return function (constructor: any) {
    const hookedElement = document.getElementById(hookedId);
    const c = new constructor(value);
    console.log('c', c);
    if (hookedElement) {
      hookedElement.innerHTML = template;
      hookedElement.querySelector('h1')!.textContent = c.name;
    }
  };
}

@withTemplate('<h1>Name prints here</h1>', 'erics', 'test')
class Customer3 {
  name = 'eric';
  constructor(n: string) {
    this.name = n;
    console.log('Creating a Customer');
  }
}

//3. Property decorator
function PropertyLogger(target: any, propertyname: string | number) {
  console.log('property logger target', target);
  console.log('propertyname', propertyname);
}

class Customer4 {
  @PropertyLogger
  name = 'eric';
  constructor(n: string) {
    this.name = n;
    console.log('Creating a Customer');
  }
}

// 5. decorator as validator

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive'],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  debugger;
  if (!objValidatorConfig) return true;

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Require
  title: string;
  @Require
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCource = new Course(title, price);

  console.log('print course object', createdCource);

  if (!validate(createdCource)) {
    alert('invalid');
    return;
  }
});

// 6. Autobind with decorator

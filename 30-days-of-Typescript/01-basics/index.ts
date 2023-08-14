// index.ts

/* ------------------------------- Day 02 ----------------------------------- */
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;


let messageToSend;

messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 1011011011100100011111010110;

let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;

// absoluteNothing = 123;
// literallyAbsoluteNothing = "I can't live in this variable now...";

let canBeNullableString: string;


// let myString = canBeNullableString;

canBeNullableString = 'hello';

// canBeNullableString = undefined;
// canBeNullableString = null;

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = 'Assigned with string...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with string, again...';

let info = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};

let someone = {
  knows: undefined,
  identity: null
};

info.name = 'Martin';
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;


// info.name = false;
// info.age = null;
// info.hasPet = 'Doggie with Mustache!';

// someone.knows = 'Nothing';
// someone.identity = 'John Snow';

// info = {
//   name: 'Martin',
//   age: 24,
//   hasPet: true
// };

// info = {
//   name: 'Martin',
//   age: 24,
// };

// someone = {
//   knows: undefined,
//   identity: null,
//   loves: 'Ygritte',
// };

// info.job = 'Engineer';

// info.age = undefined;

let nestedObject = {
  prop: 'Hello',
  child: {
    prop1: 123,
    prop2: false
  }
};

// 2. Rest-Spread
let obj1 = { hello: 'world' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

// 3. Object.assign 
// let obj3 = { hello: 'Another world' };
// let obj4 = Object.assign(obj3, { goodbye: 'Another cruel world' });
//  tsconfig.json ["es2015", "dom"]


let justAnObject: object = { hello: 'World' };

// justAnObject.hello = 'Max';

// 測試情況一：覆寫錯誤型別的值 => 錯誤
// justAnObject.hello = null;

// PASS!
justAnObject = { goodbye: 'Cruel World' };

//  Key
// justAnObject.newProp = 123;

// justAnObject = 123;

//  PASS!
justAnObject = [1, '2', 3, '4', 5, true, { hello: 'world '}];

//  PASS!
justAnObject = function () { console.log('Oh my goddddddd!?!?'); }

// PASS!
justAnObject = new Object();

//  PASS!
justAnObject = new String("Who am I!? I'm a String or Object!?");
justAnObject = new Number(42);

// PASS!
justAnObject = Object;
justAnObject = Array;

let arrayObject = [1, 2, 3, 4, 5];
let functionObject = function() { console.log('Again!?'); };
let objectObject = new Object();
let primitiveObject = new String('What does the fox say? Ding!Ding!Ding!Ding!Ding!~');
let classItself = Object;

// arrayObject.customProp = 123;
// functionObject.customProp = 456;
// objectObject.customProp = 'Huh?';
// primitiveObject.customProp = 'Bird says: Chuchuchuchuchuchuchuchuchuchu!~';
// classItself.customProp = 3.1415926;
 
//  pop
arrayObject.pop = function() { return 123; };

//  Return  `number` TS：
// arrayObject.pop = function() { console.log('Returns nothing!'); };
// arrayObject.pop = function() { return 'string'; };

let aSimpleFunction = function() { console.log('Hi!'); };

// let addition = function (num1, num2) {
//   return num1 + num2;
// };

let addition = function (param1: number, param2: number) {
  return param1 + param2;
};

// let shouldBeString: string = addition(123, 456);

const aJSONString = '{"Hello": "World", "luckyNumber": 14}';

let parsedJSON = JSON.parse(aJSONString);


let parsedJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number };
let parsedJSON2 = <{ hello: string, luckyNumber: number }>JSON.parse(aJSONString);
let parsedJSON3: { hello: string, luckyNumber: number } = JSON.parse(aJSONString);

// addition : (number, number) => number

// let addition = function (param1: number, param2: number) {
//   return param1 + param2;
// };

// addition： (number, number) => number
addition = function (param1: number, param2: number) {
  return param2 + param1;

// addition:(string, string) => string
// addition = function (param1: string, param2: string) {
//   return param1 + param2;
// }

//(number, number) => void 
// addition = function (param1: number, param2: number) {
//   param1 + param2;
// }

//undefined
let doesItWork1 = function doesItWork1() {
  return undefined;
}

// undefined
let doesItWork2 = function doesItWork2(): undefined {
  return undefined;
}

// let doesItWork3 = function doesItWork3(): undefined {
  // Empty and returns nothing!
// }

//  void ,undefined
let doesItWork4 = function doesItWork4(): void {
  return undefined;
}

let numbers = [1, 2, 3, 4, 5];

let strings = ['hi', 'how are you', 'goodbye'];

numbers[1] = 123;   // <- PASS！
// numbers[3] = '123'; 
numbers.push(456);   // <- PASS！
// numbers.push('456'); 
numbers.concat([789, 987]);     // <- PASS！
// numbers.concat(['789', '987']);

numbers = [666, 888, 999];               // <- PASS！
// numbers = ！TS 

let numbersAndStrings = [1, '2', 42, 666, "Devils don't actually like to wear Prada!"];

let objectsArray1 = [
  { message: 'Hello' },
  { message: 'Hi' },
  { message: 'Goodbye' }
];

// let objectsArray2: ({ message: string, revolt?: boolean })[] = [
//   { message: 'Hello' },
//   { message: 'Hi', revolt: true },
//   { message: 'Goodbye' }
// ];

let objectsArray2: ({ message: string, revolt?: boolean })[] = [
  { message: 'Hello' },
  { message: 'Hi', revolt: undefined },
  { message: 'Goodbye', revolt: true }
];

let objectsArray3 = [
  { message: 'Hello' },
  { message: 10100101110110 },
  { message: 'Goodbye' }
];

let functionsArray4 = [
  function addition(num1: number, num2: number) { return num1 + num2 },
  function subtraction(num1: number, num2: number) { return num1 - num2 },
  function multiplication(num1: number, num2: number) { return num1 * num2 },
  function division(num1: number, num2: number) { return num1 / num2 }
];

let arraysArray = [
  [1, 2],
  ['Hello', 'World', 'AABAA，叫叫CBA，到底是ABC還是CBA，筆者忘記了'],
  [true, false, true, true, false],
];

//（Ooooooooowwww)
let miscellaneousArraysArray = [
  [1, 2, 3],
  ['Hello', 'World'],
  [true, false, 123, null],
  ['String', undefined],
];

let emptyArray = [];

let canBeEitherNullOrNumbers: (number | null)[] = [1, 2, 4];
canBeEitherNullOrNumbers.splice(2, 0, null);
// let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map(num => num * 2);

//ES6 Arrow Function：
// let mappedNumbers = numbers.map(function(num) { return num * 2; });
//
// Arrow Functions, Function ES6 
// type Vehicle = [string, string, string, Date];

let BMWMotor: Vehicle = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)];
let JaguarOffRoad = <Vehicle>['Jaguar', 'off-road', 'royal-blue', new Date(2019, 1, 9)];
let ToyotaRV = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)] as Vehicle;

type Vehicle = [string, string, string, Date];

// let v1: Vehicle = ['Honda', 'motorcycle', 'red'];

// let v2: Vehicle = ['Gogoro', 'scooter', 'white', new Date(2019, 4, 27), 'electrical'];

// let v3: Vehicle = ['Tesla', 'electric', 'sapphire', '2019-08-14'];

// let v4: Vehicle = ['Prosche', 'race', new Date(2019, 7, 21), 'carbon-black'];

let WTFVehicle: Vehicle = ['taxi', 'yellow', 'Toyota', new Date(2019, 6, 12)];

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

// enum WeekDay = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

let weekDayOfBirthday = WeekDay.Monday;

let TGIF: WeekDay = WeekDay.Friday;
console.log(TGIF);

let valueOfTGIF = WeekDay[TGIF];
console.log(valueOfTGIF);

let addOp = function (n1: number, n2: number) {
  return n1 + n2;
}

let subtractOp = function (n1: number, n2: number) {
  return n1 - n2;
}

let multiplyOp = function (n1: number, n2: number) {
  return n1 * n2;
}

let divideOp = function(n1: number, n2: number) {
  return n1 / n2;
}

// type MathOperator = (n1: number, n2: number) => number;

let powerOp: MathOperator = function (n1: number, n2: number) {
  return n1 ** n2;
};


// let wrongPowerOp1: MathOperator = function (n1: string, n2: string) {
//   return n1 ** n2;
// };

// let wrongPowerOp2: MathOperator = function (n1: number, n2: number) {
//   return (n1 ** n2).toString();
// };

type MathOperator = (n1: number, n2: number) => number;

//，Implicit `any`
let powerOpWithNoParamsAnnotation: MathOperator = function (n1, n2) {
  return n1 ** n2;
};

// powerOpWithNoParamsAnnotation(
//   '123',
//   '456'
// );


type PersonInfo = {
  name: string,
  age: number,
  hasPet: boolean
};

let infoAboutMaxwell: PersonInfo = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};

// infoAboutMaxwell.newInfo = 'Graduated from NTUST';

infoAboutMaxwell.hasPet = true;

// infoAboutMaxwell.hasPet = 'Doggie & Kittie';

infoAboutMaxwell = {
  name: 'Alexius',
  age: 18,
  hasPet: true,
};

// infoAboutMaxwell = {
//   firstName: 'Maxwell',
//   graduated: true,
//   age: 20,
//   hasPet: false,
// };


function printInfo(info: PersonInfo) {
  console.log(`Name: ${info.name}`);
  console.log(`Age: ${info.age}`);
  console.log(`Has Pet? ${info.hasPet}`);
}

// PersonalInfo

// printInfo({
//   name: 'Martin',
//   age: 28,
//   hasPet: true,

//   hello: 'world',
//   nothingSpecial: null,
// });

// PersonInfo
let infoAboutMartin = {
  name: 'Martin',
  age: 28,
  hasPet: true,

  hello: 'world',
  nothingSpecial: null,
};

printInfo(infoAboutMartin);

enum Gender { Male, Female, Other };

type TestAccountInfo = {
  account: string,
  password: string,
  nickname: string | undefined,
  birth: Date | undefined,
  gender: Gender | undefined,
  subscribed: boolean
};

// 依然出錯！
// let accountMaxwell: TestAccountInfo = {
//   account: 'nordic.wyvern',
//   password: '<hashed-password>',
//   subscribed: false
// };

type AccountInfo = {
  account: string,
  password: string,
  nickname?: string,
  birth?: Date,
  gender?: Gender,
  subscribed: boolean
};

// let accountMaxwell: AccountInfo = {
//   account: 'nordic.wyvern',
//   password: '<hashed-password>',
//   subscribed: false
// };

let additionThreeAsDefault = function (num1: number, num2?: number) {
  if (num2) {
    return num1 + num2;
  }
  return num1 + 3;
}

type VehicleInfoWithOptionalElements = [string, string, string?, Date?];

let executesForever = function forever() {
  while(true) {
    /* Stuck in here forever... */
  }
};

const randomNumber = Math.random() * 10;

let probablyExecutesForever = function (num: number) {
  while (num > 5) {
    /* Probably stuck in here forever... */
  }
};

// Maybe 'never' or 'void' case
probablyExecutesForever(randomNumber);

// Definite 'never' case
probablyExecutesForever(6);

// Definite 'void' case
probablyExecutesForever(4);

// let probablyThrowsError = function (num: number): number | never {
//   if (num <= 0) {
//     throw new Error('Not a positve number, go to hell!');
//   }
//   return num;
// };

type EitherNumberOrNever = number | never;
type MustBeNever = number & never;


let probablyThrowsError = function (num: number) {
  if (num <= 0) {
    throw new Error('Not a positve number, go to hell!');
  }
  return num;
};

let acceptsNever: number = probablyThrowsError(-5);

// let mustThrowError = function () {
//   throw new Error('Throw new error!');
// }

let mustThrowError = function () {
  throw new Error('Throw new error!');
}

let mustAcceptsNever: never = mustThrowError();

let canAlsoAcceptNever: number = mustThrowError();

let wontThrowError = function () { return 42; };

// mustAcceptsNever = wontThrowError();

// function possibleNotToThrowError(): never {
//   const possibility = Math.random();
//   if (possibility > 0.5) {
//     throw new Error('Error Thrown');
//   }
// }

let anyType: any;
let unknownType: unknown;

anyType = 123;
anyType = 'Any string';
anyType = true;
anyType = null;
anyType = undefined;
anyType = { hello: 'world' };
anyType = [1, true, null, 'Any string in array'];
anyType = function () { console.log('Hello!'); };
anyType = new Object();

unknownType = 123;
unknownType = 'Unknown string';
unknownType = true;
unknownType = null;
unknownType = undefined;
unknownType = { hello: 'world' };
unknownType = [1, true, null, 'Unknown string in array'];
unknownType = function () { console.log('Hello!'); };
unknownType = new Object();

let isAny: any;
let isUnknown: unknown;

let isNumber: number;
let isString: string;
let isBoolean: boolean;
let isNull: null;
let isUndefined: undefined;
let isAKindOfObjectLiteral: { name: string, age: number };
let isAKindOfArray: number[];
let isAKindOfFunction: () => void;
let isAKindOfObject: Object;

// let go
isNumber               = isAny;
isString               = isAny;
isBoolean              = isAny;
isNull                 = isAny;
isUndefined            = isAny;
isAKindOfObjectLiteral = isAny;
isAKindOfArray         = isAny;
isAKindOfFunction      = isAny;
isAKindOfObject        = isAny;
isAny                  = isAny;
isUnknown              = isAny;

// `unknown` `any`
// `unknown`
// isNumber               = isUnknown; 
// isString               = isUnknown; 
// isBoolean              = isUnknown; 
// isNull                 = isUnknown; 
// isUndefined            = isUnknown;
// isAKindOfObjectLiteral = isUnknown; 
// isAKindOfArray         = isUnknown; 
// isAKindOfFunction      = isUnknown; 
// isAKindOfObject        = isUnknown;
isAny                  = isUnknown;
isUnknown              = isUnknown;


/* Control-Flow Based Narrowing */
// isNumber = isUnknown;

if (typeof isUnknown === 'number') {
  isNumber = isUnknown;
}


isString = <string>isUnknown;

isAKindOfArray = isUnknown as number[];

// let isAny: any;
// let isUnknown: unknown;

isAny.KnockKnock;
// isUnknown.Hello; 

isAny.greets('He..He..He-Hey~~~~ Charr~r~r~rlieee~e~e~e~~~');
// isUnknown.response('N-N-N-No No No No No~~~ Get outta my way!!!'); // <-- 保證出錯


let unknownObj: unknown = {
  Hello: 'Charlie the Unicorn',
  response: function (content: string) { console.log(content); },
};

type Unicorn = {
  Hello: string,
  response: (content: string) => void
};

// unknownObj.Hello;
// unknownObj.response('No more candy mountain!');

(<Unicorn>unknownObj).Hello;
(unknownObj as Unicorn).response('No more candy mountain!');

let unknownPrimitive: unknown = '123456789';

// parseInt(unknownPrimitive, 10);

if (typeof unknownPrimitive === 'string') {
  parseInt(unknownPrimitive, 10);
}

/*  JSON.parse */
function safelyParseJSON(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

let randomJSONString = `{
  "message": "Hello World",
  "unknownTypeIsAwesome": true
}`;

//  JSON.parse
let parsedFromNormalJSONParse = JSON.parse(randomJSONString);
parsedFromNormalJSONParse.message;

// Safe-Counterpart JSON.parse
let parsedFromSafeJSONParse = safelyParseJSON(randomJSONString);
// parsedFromSafeJSONParse.message; 


// In an intersection everything absorbs unknown
type TSDoc00 = unknown & null;  // null
type TSDoc01 = unknown & undefined;  // undefined
type TSDoc02 = unknown & null & undefined;  // null & undefined (which becomes never)
type TSDoc03 = unknown & string;  // string
type TSDoc04 = unknown & string[];  // string[]
type TSDoc05 = unknown & unknown;  // unknown
type TSDoc06 = unknown & any;  // any

// In a union an unknown absorbs everything
type TSDoc10 = unknown | null;  // unknown
type TSDoc11 = unknown | undefined;  // unknown
type TSDoc12 = unknown | null | undefined;  // unknown
type TSDoc13 = unknown | string;  // unknown
type TSDoc14 = unknown | string[];  // unknown
type TSDoc15 = unknown | unknown;  // unknown
type TSDoc16 = unknown | any;  // any

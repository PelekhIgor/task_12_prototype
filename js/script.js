const HAMBURGER_SIZE = {
    SMALL:{
        price: 22,
        calories: 33,
    },
    MEDIUM:{
        price: 33,
        calories: 44,
    },
    BIG:{
        price: 44,
        calories: 55,
    },
};

const TOPINGS = {
    SALAD: {
        price: 11,
        calories: 0,
    },
    MAYO: {
        price: 33,
        calories: 400,
    },
    POTATO: {
        price: 44,
        calories: 77,
    },
};

function CreateHamburger(size){    // функция конструктор
    this._HAMBURGER_VALUE = {      // property с нижним подчеркиванием нельзя изменять
        PRICE: 'price',
        CALORIES: 'calories',
    }
    this.size = size;
    this.topings = [];  // добавленные топинги складываем в масив
}
// методы добавляем в prototype функции конструктор (меньше задействует оперативную память)
CreateHamburger.prototype.addToping = function (toping){     // Метод (Push) добавления топингов в масив
    this.topings.push(toping);
}
CreateHamburger.prototype.calcHamburger = function (valueName){
    return this.topings.reduce((acc, elem) => acc+=elem[valueName],  this.size[valueName])    // универсальная функция для подсчета как цены так и калорий
}

CreateHamburger.prototype.getPrice = function (){
    return this.calcHamburger(this._HAMBURGER_VALUE.PRICE)     // функция для получем цену
}

CreateHamburger.prototype.getCalories = function (){
    return this.calcHamburger(this._HAMBURGER_VALUE.CALORIES)   // функция для получаем калории
}

const hamburger = new CreateHamburger(HAMBURGER_SIZE.SMALL)      // Вызиваем функцию конструктор с помощью оператора "new"

hamburger.addToping(TOPINGS.MAYO)    //добавляем топинги в  масив
hamburger.addToping(TOPINGS.SALAD)
hamburger.addToping(TOPINGS.POTATO)

const totalPrice = hamburger.getPrice()      // вызиваем функции
const totalCalories = hamburger.getCalories()

console.log(hamburger)
console.log('цена',totalPrice)
console.log('калории',totalCalories)


const hamburger2 = new CreateHamburger(HAMBURGER_SIZE.BIG)

hamburger2.addToping(TOPINGS.MAYO)
hamburger2.addToping(TOPINGS.MAYO)
hamburger2.addToping(TOPINGS.MAYO)
hamburger2.addToping(TOPINGS.SALAD)
hamburger2.addToping(TOPINGS.SALAD)
hamburger2.addToping(TOPINGS.SALAD)
hamburger2.addToping(TOPINGS.POTATO)

const totalPrice2 = hamburger2.getPrice()
const totalCalories2 = hamburger2.getCalories()

console.log('цена',totalPrice2)
console.log('калории',totalCalories2)
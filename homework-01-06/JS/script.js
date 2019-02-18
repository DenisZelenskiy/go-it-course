"use strict";

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
    get toppings() {
      return this._toppings;
    }
    get size() {
      return this._size;
    }
    get stuffing() {
      return this._stuffing;
    }
    calculatePrice() {
      const sizePrice = Hamburger.SIZES[this._size].price;
      const stufingPrice = Hamburger.STUFFINGS[this._stuffing].price;
      const toppingPrice = this._toppings.reduce(function (acc, elem) {
        acc += Hamburger.TOPPINGS[elem].price;
        return acc;
      }, 0);
      const sumPrice = sizePrice + stufingPrice + toppingPrice;
      return sumPrice;
    }
    calculateCalories() {
      const sizeCalories = Hamburger.SIZES[this._size].calories;
      const stuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
      const toppingCalories = this._toppings.reduce(function (acc, elem) {
        acc += Hamburger.TOPPINGS[elem].calories;
        return acc;
      }, 0);
      const sumCalories = sizeCalories + stuffingCalories + toppingCalories;
      return sumCalories;
    }
    addTopping(topping) {
      if (!this._toppings.includes(topping)) {
        this._toppings.push(topping);
      }
    }
    removeTopping(topping) {
      this._toppings = this._toppings.filter(elem => elem !== topping);
    }
  };

/*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
 Hamburger.SIZE_SMALL = "SIZE_SMALL";
 Hamburger.SIZE_LARGE = "SIZE_LARGE";
 Hamburger.SIZES = {
   [Hamburger.SIZE_SMALL]: {
     price: 30,
     calories: 50
   },
   [Hamburger.SIZE_LARGE]: {
     price: 50,
     calories: 100
   }
 };
 
 Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
 Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
 Hamburger.STUFFING_MEAT = "STUFFING_MEAT";
 Hamburger.STUFFINGS = {
   [Hamburger.STUFFING_CHEESE]: {
     price: 15,
     calories: 20
   },
   [Hamburger.STUFFING_SALAD]: {
     price: 20,
     calories: 5
   },
   [Hamburger.STUFFING_MEAT]: {
     price: 35,
     calories: 15
   }
 };
 
 Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
 Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";
 Hamburger.TOPPINGS = {
   [Hamburger.TOPPING_SPICE]: {
     price: 10,
     calories: 0
   },
   [Hamburger.TOPPING_SAUCE]: {
     price: 15,
     calories: 5
   }
 };
/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger._toppings);
console.log("Price with sauce: ", hamburger.calculatePrice());
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Hamburget has %d toppings", hamburger.toppings.length);
console.log(hamburger);
/*
    🔔 Обратите внимание на такие моменты:
          ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
              другой код, а класс живет в изоляции от мира
          ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
          чтобы нельзя было создать объект, не указав их
          ✔️ необязательные (добавка) добавляем через методы
          ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
              свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
          ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
          ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
                а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
          логично в тот момент, когда это потребуется, а не заранее.
  */

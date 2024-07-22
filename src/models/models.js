export class Race {
  constructor(strength = 0, dexterity = 0, intelligence = 0) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
  }

  /**
   * Zwraca opis rasy jako string. Opis obiektu, który zawiera wartości jego właściwości (strength, dexterity, intelligence), w formie czytelnego tekstu.
   * @returns {string} Opis rasy.
   */
  getDescription() {
    return `Siła: ${this.strength}, Zręczność: ${this.dexterity}, Inteligencja: ${this.intelligence}`;
  }
}

export class Playable_class {
  constructor(strength = 0, dexterity = 0, intelligence = 0) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
  }

  /**
   * Zwraca opis klasy jako string.
   * @returns {string} Opis klasy.
   */
  getDescription() {
    return `Siła: ${this.strength}, Zręczność: ${this.dexterity}, Inteligencja: ${this.intelligence}`;
  }
}

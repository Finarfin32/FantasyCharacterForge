import { Race } from "../models/models";
import { Playable_class } from "../models/models";

/**
 * Stałe obiekty reprezentujące różne rasy w grze.
 * @constant {Race} RACE_HUMAN - Rasa ludzka o wartościach atrybutów: strength=5, agility=8, intelligence=10.
 * @constant {Race} RACE_ELF - Rasa elfów o wartościach atrybutów: strength=3, agility=10, intelligence=12.
 * @constant {Race} RACE_DWARF - Rasa krasnoludów o wartościach atrybutów: strength=8, agility=4, intelligence=8.
 * @constant {Race} RACE_DEMON - Rasa demonów o wartościach atrybutów: strength=12, agility=2, intelligence=3.
 */
export const RACE_HUMAN = new Race(5, 8, 10);
export const RACE_ELF = new Race(3, 10, 12);
export const RACE_DWARF = new Race(8, 4, 8);
export const RACE_DEMON = new Race(12, 2, 3);

/**
 * Stałe obiekty reprezentujące różne klasy postaci w grze.
 */
export const PLAYABLE_CLASS_WARRIOR = new Playable_class(8, 6, 2);
export const PLAYABLE_CLASS_HUNTER = new Playable_class(6, 10, 4);
export const PLAYABLE_CLASS_MAGE = new Playable_class(1, 2, 6);
export const PLAYABLE_CLASS_PRIEST = new Playable_class(4, 4, 10);

/**
 * Tablice zawierające nazwy ras i klas postaci w grze.
 * @constant {Array<string>} RACES_NAMES - Tablica z nazwami ras: ["HUMAN", "ELF", "DWARF", "DEMON"].
 * @constant {Array<string>} CLASSES_NAMES - Tablica z nazwami klas: ["WARRIOR", "HUNTER", "MAGE", "PRIEST"].
 */
export const RACES_NAMES = ["HUMAN", "ELF", "DWARF", "DEMON"];
export const CLASSES_NAMES = ["WARRIOR", "HUNTER", "MAGE", "PRIEST"];

/**
 * Tablica obiektów ras dostępnych w grze.
 * @constant {Array<Race>} RACES - Tablica z obiektami ras: [RACE_HUMAN, RACE_ELF, RACE_DWARF, RACE_DEMON].
 */
export const RACES = [RACE_HUMAN, RACE_ELF, RACE_DWARF, RACE_DEMON];

export const RACES_DISPLAY = ["CZŁOWIEK", "ELF", "KRASNOLUD", "DEMON"];
export const CLASSES_DISPLAY = ["WOJOWNIK", "ŁOWCA", "MAG", "KAPŁAN"];

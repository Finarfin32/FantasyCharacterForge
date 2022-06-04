import { Race } from "../models";
import { Playable_class } from "../models";

export const RACE_HUMAN = new Race(5, 8, 10);

export const RACE_ELF = new Race(3, 10, 12);

export const RACE_DWARF = new Race(8, 4, 8);

export const RACE_ORC = new Race(12, 2, 3);

export const PLAYABLE_CLASS_WARRIOR = new Playable_class(8, 6, 2);

export const PLAYABLE_CLASS_HUNTER = new Playable_class(6, 10, 4);

export const PLAYABLE_CLASS_MAGE = new Playable_class(1, 2, 6);

export const PLAYABLE_CLASS_PRIEST = new Playable_class(4, 4, 10);

export const RACES_NAMES = ["HUMAN", "ELF", "DWARF", "ORC"];
export const CLASSES_NAMES = ["WARRIOR", "HUNTER", "MAGE", "PRIEST"];

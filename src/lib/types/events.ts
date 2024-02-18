import {ChangeEvent, KeyboardEvent} from "react";

export type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type InputKeyboardEvent = KeyboardEvent<HTMLInputElement>;
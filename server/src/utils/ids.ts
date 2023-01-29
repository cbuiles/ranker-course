import { customAlphabet, nanoid } from "nanoid";

export const createPollID = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    6
);

export const createUserID = () => nanoid();

export const createNomationID = () => nanoid(8);
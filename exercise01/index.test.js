import {expect, describe, it} from "vitest";
import {contains} from "exercise01/index.js"

describe('contains', () => {
it('if there is the space return true', () => {
    expect(contains("Hello World", " ")).toBe(true);
} ) 



    it('if there is the space return true', () => {
        expect(contains("Ciao", " ")).toBe(false);
    } ) 
})

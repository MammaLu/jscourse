import { contains } from "../exercise01/index";
import { describe, it, expect} from "vitest";
describe('contains', () => {
it('if there is the space return true', () => {
    expect(contains("Hello World", " ")).toBe(true);
} ) 



    it('if there is the space return true', () => {
        expect(contains("Ciao", " ")).toBe(false);
    } ) 
})

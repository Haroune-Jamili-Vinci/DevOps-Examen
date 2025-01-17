import { Main } from '../src/passwordChecker.js';

describe("passwordChecker function should return the answer", function () {

    it("Should return false for 1 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("b");

        expect(result).toBe(false);
    })

    it("Should return false for 2 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("ba");

        expect(result).toBe(false);
    })

    it("Should return false for 5 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("baclo");

        expect(result).toBe(false);
    })




})
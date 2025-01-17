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


    it("Should return true for 8 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("bacloamp");

        expect(result).toBe(true);
    })



    it("Should return true for 10 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("bacloampmp");

        expect(result).toBe(true);
    })



    it("Should return true for 8 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("bacloamp");

        expect(result).toBe(true);
    })



    it("Should return true for 8 characters ", function () {
        const main = new Main();

        const result = main.passwordChecker("bacloamp");

        expect(result).toBe(true);
    })


    it("Should return false when not special character", function () {
        const main = new Main();

        const result = main.specialCharactereFunction("bacloampsqs");

        expect(result).toBe(false);
    })

    it("Should return false when not special character", function () {
        const main = new Main();

        const result = main.specialCharactereFunction("bacloam_s@s");

        expect(result).toBe(false);
    })









})
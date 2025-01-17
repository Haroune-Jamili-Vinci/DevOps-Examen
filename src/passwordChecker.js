export class Main {
    passwordChecker(password) {
        if (password.length === 1 || password.length === 2) return false

        return true;
    }

}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const bcrypt = require("bcrypt");
class Bcrypt {
    constructor() {
        this.saltOrRounds = 10;
    }
    async generateHash(password) {
        const hash = await bcrypt.hash(password, this.saltOrRounds);
        return hash;
    }
    async compareHash(password, passwordDb) {
        const status = await bcrypt.compare(password, passwordDb);
        if (status) {
            return true;
        }
        return false;
    }
}
exports.Bcrypt = Bcrypt;
//# sourceMappingURL=bcrypt.js.map
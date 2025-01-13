"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("../../lib/bcrypt/bcrypt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(bcrypt, userService, jwtService, configService) {
        this.bcrypt = bcrypt;
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.expirationJwtTime = +this.configService.get('JWT_EXPIRATION_TIME');
    }
    async signIn(data) {
        const foundUser = await this.userService.findGetByAuth(data.email);
        if (!foundUser) {
            throw new common_1.UnauthorizedException('Usuário não existe');
        }
        if (await this.bcrypt.compareHash(data.password, foundUser.password)) {
            const payload = {
                sub: foundUser.id,
                email: foundUser.email,
                role: foundUser.role,
            };
            const token = this.jwtService.sign(payload);
            return {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
                token,
                expireIn: this.expirationJwtTime,
            };
        }
        throw new common_1.UnauthorizedException('Usuário ou senha incorreto');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bcrypt_1.Bcrypt,
        users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const user_1 = require("./entities/user");
const bcrypt_1 = require("../../lib/bcrypt/bcrypt");
const user_response_1 = require("./entities/user.response");
let UsersService = class UsersService {
    constructor(prisma, bcrypt) {
        this.prisma = prisma;
        this.bcrypt = bcrypt;
    }
    async create(user) {
        const newUser = new user_1.User(user);
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: newUser.email,
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Este usuário já existe');
        }
        const hash = await this.bcrypt.generateHash(newUser.password);
        const data = {
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            password: hash,
            posts: newUser.posts,
        };
        await this.prisma.user.create({
            data,
        });
    }
    async findGetByAll(page, limit) {
        const skip = (page - 1) * limit;
        const docs = await this.prisma.user.findMany({
            skip,
            take: limit,
        });
        const userResponse = docs.map((user) => {
            return new user_response_1.UserResponse(user);
        });
        return userResponse;
    }
    async findGetByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não existe');
        }
        const filterUser = new user_response_1.UserResponse(user);
        return filterUser;
    }
    async findGetByAuth(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return new user_1.User(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bcrypt_1.Bcrypt])
], UsersService);
//# sourceMappingURL=users.service.js.map
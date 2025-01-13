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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const projects_1 = require("./entities/projects");
const prisma_service_1 = require("../../database/prisma.service");
const projects_response_1 = require("./entities/projects.response");
let ProjectsService = class ProjectsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async created(project, id) {
        const data = new projects_1.Project({
            title: project.title,
            description: project.description,
            userId: id,
            stacks: project.stacks,
            video: project.video,
            image: project.image,
        });
        const existingProject = await this.prisma.projects.findFirst({
            where: {
                title: data.title,
            },
        });
        if (existingProject) {
            throw new common_1.ConflictException('Este usuário já existe');
        }
        const result = await this.prisma.projects.create({
            data: {
                title: data.title,
                description: data.description,
                userId: data.userId,
                stacks: data.stacks,
                video: data.video,
                image: data.image,
            },
        });
        if (!result) {
            throw new common_1.HttpException('Erro ao criar usuário', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findGetByAll(page, limit) {
        const skip = (page - 1) * limit;
        const docs = await this.prisma.projects.findMany({
            skip,
            take: limit,
        });
        const projects = docs.map((project) => {
            return new projects_response_1.ProjectResponse(project);
        });
        return projects;
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map
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
exports.Project = void 0;
const class_validator_1 = require("class-validator");
const stack_dto_1 = require("../dtos/stack.dto");
const class_transformer_1 = require("class-transformer");
class Project {
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.Project = Project;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userId !== undefined),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Project.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => stack_dto_1.Stacks),
    __metadata("design:type", Array)
], Project.prototype, "stacks", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], Project.prototype, "video", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], Project.prototype, "image", void 0);
//# sourceMappingURL=projects.js.map
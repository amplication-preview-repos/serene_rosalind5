import { Module } from "@nestjs/common";
import { ProjectManagementModuleBase } from "./base/projectManagement.module.base";
import { ProjectManagementService } from "./projectManagement.service";
import { ProjectManagementController } from "./projectManagement.controller";
import { ProjectManagementResolver } from "./projectManagement.resolver";

@Module({
  imports: [ProjectManagementModuleBase],
  controllers: [ProjectManagementController],
  providers: [ProjectManagementService, ProjectManagementResolver],
  exports: [ProjectManagementService],
})
export class ProjectManagementModule {}

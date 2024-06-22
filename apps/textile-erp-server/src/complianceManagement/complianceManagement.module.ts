import { Module } from "@nestjs/common";
import { ComplianceManagementModuleBase } from "./base/complianceManagement.module.base";
import { ComplianceManagementService } from "./complianceManagement.service";
import { ComplianceManagementController } from "./complianceManagement.controller";
import { ComplianceManagementResolver } from "./complianceManagement.resolver";

@Module({
  imports: [ComplianceManagementModuleBase],
  controllers: [ComplianceManagementController],
  providers: [ComplianceManagementService, ComplianceManagementResolver],
  exports: [ComplianceManagementService],
})
export class ComplianceManagementModule {}

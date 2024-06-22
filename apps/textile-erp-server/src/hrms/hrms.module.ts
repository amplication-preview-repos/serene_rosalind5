import { Module } from "@nestjs/common";
import { HrmsModuleBase } from "./base/hrms.module.base";
import { HrmsService } from "./hrms.service";
import { HrmsController } from "./hrms.controller";
import { HrmsResolver } from "./hrms.resolver";

@Module({
  imports: [HrmsModuleBase],
  controllers: [HrmsController],
  providers: [HrmsService, HrmsResolver],
  exports: [HrmsService],
})
export class HrmsModule {}

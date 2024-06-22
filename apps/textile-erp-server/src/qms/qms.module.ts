import { Module } from "@nestjs/common";
import { QmsModuleBase } from "./base/qms.module.base";
import { QmsService } from "./qms.service";
import { QmsController } from "./qms.controller";
import { QmsResolver } from "./qms.resolver";

@Module({
  imports: [QmsModuleBase],
  controllers: [QmsController],
  providers: [QmsService, QmsResolver],
  exports: [QmsService],
})
export class QmsModule {}

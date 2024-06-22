import { Module } from "@nestjs/common";
import { PlmModuleBase } from "./base/plm.module.base";
import { PlmService } from "./plm.service";
import { PlmController } from "./plm.controller";
import { PlmResolver } from "./plm.resolver";

@Module({
  imports: [PlmModuleBase],
  controllers: [PlmController],
  providers: [PlmService, PlmResolver],
  exports: [PlmService],
})
export class PlmModule {}

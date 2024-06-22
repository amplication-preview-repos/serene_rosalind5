import { Module } from "@nestjs/common";
import { ManufacturingModuleBase } from "./base/manufacturing.module.base";
import { ManufacturingService } from "./manufacturing.service";
import { ManufacturingController } from "./manufacturing.controller";
import { ManufacturingResolver } from "./manufacturing.resolver";

@Module({
  imports: [ManufacturingModuleBase],
  controllers: [ManufacturingController],
  providers: [ManufacturingService, ManufacturingResolver],
  exports: [ManufacturingService],
})
export class ManufacturingModule {}

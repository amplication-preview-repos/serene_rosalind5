import { Module } from "@nestjs/common";
import { BiModuleBase } from "./base/bi.module.base";
import { BiService } from "./bi.service";
import { BiController } from "./bi.controller";
import { BiResolver } from "./bi.resolver";

@Module({
  imports: [BiModuleBase],
  controllers: [BiController],
  providers: [BiService, BiResolver],
  exports: [BiService],
})
export class BiModule {}

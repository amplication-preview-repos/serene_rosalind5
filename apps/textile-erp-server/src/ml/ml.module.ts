import { Module } from "@nestjs/common";
import { MlModuleBase } from "./base/ml.module.base";
import { MlService } from "./ml.service";
import { MlController } from "./ml.controller";
import { MlResolver } from "./ml.resolver";

@Module({
  imports: [MlModuleBase],
  controllers: [MlController],
  providers: [MlService, MlResolver],
  exports: [MlService],
})
export class MlModule {}

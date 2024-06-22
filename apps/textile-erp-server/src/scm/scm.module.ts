import { Module } from "@nestjs/common";
import { ScmModuleBase } from "./base/scm.module.base";
import { ScmService } from "./scm.service";
import { ScmController } from "./scm.controller";
import { ScmResolver } from "./scm.resolver";

@Module({
  imports: [ScmModuleBase],
  controllers: [ScmController],
  providers: [ScmService, ScmResolver],
  exports: [ScmService],
})
export class ScmModule {}

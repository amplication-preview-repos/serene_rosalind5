import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScmService } from "./scm.service";
import { ScmControllerBase } from "./base/scm.controller.base";

@swagger.ApiTags("scms")
@common.Controller("scms")
export class ScmController extends ScmControllerBase {
  constructor(protected readonly service: ScmService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MlService } from "./ml.service";
import { MlControllerBase } from "./base/ml.controller.base";

@swagger.ApiTags("mls")
@common.Controller("mls")
export class MlController extends MlControllerBase {
  constructor(protected readonly service: MlService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlmService } from "./plm.service";
import { PlmControllerBase } from "./base/plm.controller.base";

@swagger.ApiTags("plms")
@common.Controller("plms")
export class PlmController extends PlmControllerBase {
  constructor(protected readonly service: PlmService) {
    super(service);
  }
}

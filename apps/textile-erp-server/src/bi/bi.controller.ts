import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BiService } from "./bi.service";
import { BiControllerBase } from "./base/bi.controller.base";

@swagger.ApiTags("bis")
@common.Controller("bis")
export class BiController extends BiControllerBase {
  constructor(protected readonly service: BiService) {
    super(service);
  }
}

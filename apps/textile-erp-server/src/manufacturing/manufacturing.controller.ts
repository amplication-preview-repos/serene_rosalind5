import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ManufacturingService } from "./manufacturing.service";
import { ManufacturingControllerBase } from "./base/manufacturing.controller.base";

@swagger.ApiTags("manufacturings")
@common.Controller("manufacturings")
export class ManufacturingController extends ManufacturingControllerBase {
  constructor(protected readonly service: ManufacturingService) {
    super(service);
  }
}

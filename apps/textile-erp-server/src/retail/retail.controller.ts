import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RetailService } from "./retail.service";
import { RetailControllerBase } from "./base/retail.controller.base";

@swagger.ApiTags("retails")
@common.Controller("retails")
export class RetailController extends RetailControllerBase {
  constructor(protected readonly service: RetailService) {
    super(service);
  }
}

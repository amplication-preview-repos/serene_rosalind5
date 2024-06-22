import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QmsService } from "./qms.service";
import { QmsControllerBase } from "./base/qms.controller.base";

@swagger.ApiTags("qms")
@common.Controller("qms")
export class QmsController extends QmsControllerBase {
  constructor(protected readonly service: QmsService) {
    super(service);
  }
}

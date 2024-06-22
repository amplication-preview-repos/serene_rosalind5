import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HrmsService } from "./hrms.service";
import { HrmsControllerBase } from "./base/hrms.controller.base";

@swagger.ApiTags("hrms")
@common.Controller("hrms")
export class HrmsController extends HrmsControllerBase {
  constructor(protected readonly service: HrmsService) {
    super(service);
  }
}

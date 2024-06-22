import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComplianceManagementService } from "./complianceManagement.service";
import { ComplianceManagementControllerBase } from "./base/complianceManagement.controller.base";

@swagger.ApiTags("complianceManagements")
@common.Controller("complianceManagements")
export class ComplianceManagementController extends ComplianceManagementControllerBase {
  constructor(protected readonly service: ComplianceManagementService) {
    super(service);
  }
}

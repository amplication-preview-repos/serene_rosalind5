import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectManagementService } from "./projectManagement.service";
import { ProjectManagementControllerBase } from "./base/projectManagement.controller.base";

@swagger.ApiTags("projectManagements")
@common.Controller("projectManagements")
export class ProjectManagementController extends ProjectManagementControllerBase {
  constructor(protected readonly service: ProjectManagementService) {
    super(service);
  }
}

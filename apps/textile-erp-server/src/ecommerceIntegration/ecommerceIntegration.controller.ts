import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EcommerceIntegrationService } from "./ecommerceIntegration.service";
import { EcommerceIntegrationControllerBase } from "./base/ecommerceIntegration.controller.base";

@swagger.ApiTags("ecommerceIntegrations")
@common.Controller("ecommerceIntegrations")
export class EcommerceIntegrationController extends EcommerceIntegrationControllerBase {
  constructor(protected readonly service: EcommerceIntegrationService) {
    super(service);
  }
}

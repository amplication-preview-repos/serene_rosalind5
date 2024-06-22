import { Module } from "@nestjs/common";
import { EcommerceIntegrationModuleBase } from "./base/ecommerceIntegration.module.base";
import { EcommerceIntegrationService } from "./ecommerceIntegration.service";
import { EcommerceIntegrationController } from "./ecommerceIntegration.controller";
import { EcommerceIntegrationResolver } from "./ecommerceIntegration.resolver";

@Module({
  imports: [EcommerceIntegrationModuleBase],
  controllers: [EcommerceIntegrationController],
  providers: [EcommerceIntegrationService, EcommerceIntegrationResolver],
  exports: [EcommerceIntegrationService],
})
export class EcommerceIntegrationModule {}

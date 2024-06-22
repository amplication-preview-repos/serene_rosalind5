import * as graphql from "@nestjs/graphql";
import { EcommerceIntegrationResolverBase } from "./base/ecommerceIntegration.resolver.base";
import { EcommerceIntegration } from "./base/EcommerceIntegration";
import { EcommerceIntegrationService } from "./ecommerceIntegration.service";

@graphql.Resolver(() => EcommerceIntegration)
export class EcommerceIntegrationResolver extends EcommerceIntegrationResolverBase {
  constructor(protected readonly service: EcommerceIntegrationService) {
    super(service);
  }
}

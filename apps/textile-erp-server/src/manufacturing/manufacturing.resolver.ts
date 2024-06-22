import * as graphql from "@nestjs/graphql";
import { ManufacturingResolverBase } from "./base/manufacturing.resolver.base";
import { Manufacturing } from "./base/Manufacturing";
import { ManufacturingService } from "./manufacturing.service";

@graphql.Resolver(() => Manufacturing)
export class ManufacturingResolver extends ManufacturingResolverBase {
  constructor(protected readonly service: ManufacturingService) {
    super(service);
  }
}

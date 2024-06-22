import * as graphql from "@nestjs/graphql";
import { RetailResolverBase } from "./base/retail.resolver.base";
import { Retail } from "./base/Retail";
import { RetailService } from "./retail.service";

@graphql.Resolver(() => Retail)
export class RetailResolver extends RetailResolverBase {
  constructor(protected readonly service: RetailService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { PlmResolverBase } from "./base/plm.resolver.base";
import { Plm } from "./base/Plm";
import { PlmService } from "./plm.service";

@graphql.Resolver(() => Plm)
export class PlmResolver extends PlmResolverBase {
  constructor(protected readonly service: PlmService) {
    super(service);
  }
}

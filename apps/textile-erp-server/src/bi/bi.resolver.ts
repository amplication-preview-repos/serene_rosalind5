import * as graphql from "@nestjs/graphql";
import { BiResolverBase } from "./base/bi.resolver.base";
import { Bi } from "./base/Bi";
import { BiService } from "./bi.service";

@graphql.Resolver(() => Bi)
export class BiResolver extends BiResolverBase {
  constructor(protected readonly service: BiService) {
    super(service);
  }
}

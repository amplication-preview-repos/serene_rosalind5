import * as graphql from "@nestjs/graphql";
import { MlResolverBase } from "./base/ml.resolver.base";
import { Ml } from "./base/Ml";
import { MlService } from "./ml.service";

@graphql.Resolver(() => Ml)
export class MlResolver extends MlResolverBase {
  constructor(protected readonly service: MlService) {
    super(service);
  }
}

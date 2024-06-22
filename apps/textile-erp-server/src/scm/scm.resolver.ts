import * as graphql from "@nestjs/graphql";
import { ScmResolverBase } from "./base/scm.resolver.base";
import { Scm } from "./base/Scm";
import { ScmService } from "./scm.service";

@graphql.Resolver(() => Scm)
export class ScmResolver extends ScmResolverBase {
  constructor(protected readonly service: ScmService) {
    super(service);
  }
}

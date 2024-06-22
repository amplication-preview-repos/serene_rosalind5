import * as graphql from "@nestjs/graphql";
import { QmsResolverBase } from "./base/qms.resolver.base";
import { Qms } from "./base/Qms";
import { QmsService } from "./qms.service";

@graphql.Resolver(() => Qms)
export class QmsResolver extends QmsResolverBase {
  constructor(protected readonly service: QmsService) {
    super(service);
  }
}

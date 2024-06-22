import * as graphql from "@nestjs/graphql";
import { HrmsResolverBase } from "./base/hrms.resolver.base";
import { Hrms } from "./base/Hrms";
import { HrmsService } from "./hrms.service";

@graphql.Resolver(() => Hrms)
export class HrmsResolver extends HrmsResolverBase {
  constructor(protected readonly service: HrmsService) {
    super(service);
  }
}

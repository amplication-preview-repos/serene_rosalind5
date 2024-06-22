import * as graphql from "@nestjs/graphql";
import { AccountsBudgetingResolverBase } from "./base/accountsBudgeting.resolver.base";
import { AccountsBudgeting } from "./base/AccountsBudgeting";
import { AccountsBudgetingService } from "./accountsBudgeting.service";

@graphql.Resolver(() => AccountsBudgeting)
export class AccountsBudgetingResolver extends AccountsBudgetingResolverBase {
  constructor(protected readonly service: AccountsBudgetingService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountsBudgetingService } from "./accountsBudgeting.service";
import { AccountsBudgetingControllerBase } from "./base/accountsBudgeting.controller.base";

@swagger.ApiTags("accountsBudgetings")
@common.Controller("accountsBudgetings")
export class AccountsBudgetingController extends AccountsBudgetingControllerBase {
  constructor(protected readonly service: AccountsBudgetingService) {
    super(service);
  }
}

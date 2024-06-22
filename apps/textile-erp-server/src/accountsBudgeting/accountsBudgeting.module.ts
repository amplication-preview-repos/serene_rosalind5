import { Module } from "@nestjs/common";
import { AccountsBudgetingModuleBase } from "./base/accountsBudgeting.module.base";
import { AccountsBudgetingService } from "./accountsBudgeting.service";
import { AccountsBudgetingController } from "./accountsBudgeting.controller";
import { AccountsBudgetingResolver } from "./accountsBudgeting.resolver";

@Module({
  imports: [AccountsBudgetingModuleBase],
  controllers: [AccountsBudgetingController],
  providers: [AccountsBudgetingService, AccountsBudgetingResolver],
  exports: [AccountsBudgetingService],
})
export class AccountsBudgetingModule {}

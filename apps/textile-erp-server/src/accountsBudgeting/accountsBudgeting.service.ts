import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsBudgetingServiceBase } from "./base/accountsBudgeting.service.base";

@Injectable()
export class AccountsBudgetingService extends AccountsBudgetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

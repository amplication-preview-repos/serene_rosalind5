import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplianceManagementServiceBase } from "./base/complianceManagement.service.base";

@Injectable()
export class ComplianceManagementService extends ComplianceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

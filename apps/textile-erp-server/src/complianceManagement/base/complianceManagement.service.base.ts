/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ComplianceManagement as PrismaComplianceManagement,
} from "@prisma/client";

export class ComplianceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComplianceManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.complianceManagement.count(args);
  }

  async complianceManagements(
    args: Prisma.ComplianceManagementFindManyArgs
  ): Promise<PrismaComplianceManagement[]> {
    return this.prisma.complianceManagement.findMany(args);
  }
  async complianceManagement(
    args: Prisma.ComplianceManagementFindUniqueArgs
  ): Promise<PrismaComplianceManagement | null> {
    return this.prisma.complianceManagement.findUnique(args);
  }
  async createComplianceManagement(
    args: Prisma.ComplianceManagementCreateArgs
  ): Promise<PrismaComplianceManagement> {
    return this.prisma.complianceManagement.create(args);
  }
  async updateComplianceManagement(
    args: Prisma.ComplianceManagementUpdateArgs
  ): Promise<PrismaComplianceManagement> {
    return this.prisma.complianceManagement.update(args);
  }
  async deleteComplianceManagement(
    args: Prisma.ComplianceManagementDeleteArgs
  ): Promise<PrismaComplianceManagement> {
    return this.prisma.complianceManagement.delete(args);
  }
}

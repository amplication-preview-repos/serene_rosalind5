import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectManagementServiceBase } from "./base/projectManagement.service.base";

@Injectable()
export class ProjectManagementService extends ProjectManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

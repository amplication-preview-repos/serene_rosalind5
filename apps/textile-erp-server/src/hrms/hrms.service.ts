import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HrmsServiceBase } from "./base/hrms.service.base";

@Injectable()
export class HrmsService extends HrmsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

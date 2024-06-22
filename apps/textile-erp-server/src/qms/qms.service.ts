import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QmsServiceBase } from "./base/qms.service.base";

@Injectable()
export class QmsService extends QmsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

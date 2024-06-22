import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetailServiceBase } from "./base/retail.service.base";

@Injectable()
export class RetailService extends RetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

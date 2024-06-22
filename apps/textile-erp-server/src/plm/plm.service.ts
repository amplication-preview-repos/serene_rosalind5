import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlmServiceBase } from "./base/plm.service.base";

@Injectable()
export class PlmService extends PlmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

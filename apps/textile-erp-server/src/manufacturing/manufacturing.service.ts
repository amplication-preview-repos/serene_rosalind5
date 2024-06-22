import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManufacturingServiceBase } from "./base/manufacturing.service.base";

@Injectable()
export class ManufacturingService extends ManufacturingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

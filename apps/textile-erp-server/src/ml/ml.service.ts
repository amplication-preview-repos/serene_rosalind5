import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlServiceBase } from "./base/ml.service.base";

@Injectable()
export class MlService extends MlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

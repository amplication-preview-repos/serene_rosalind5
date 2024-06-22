import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScmServiceBase } from "./base/scm.service.base";

@Injectable()
export class ScmService extends ScmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

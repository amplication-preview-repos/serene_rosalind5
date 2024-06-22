import * as graphql from "@nestjs/graphql";
import { ProjectManagementResolverBase } from "./base/projectManagement.resolver.base";
import { ProjectManagement } from "./base/ProjectManagement";
import { ProjectManagementService } from "./projectManagement.service";

@graphql.Resolver(() => ProjectManagement)
export class ProjectManagementResolver extends ProjectManagementResolverBase {
  constructor(protected readonly service: ProjectManagementService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { ComplianceManagementResolverBase } from "./base/complianceManagement.resolver.base";
import { ComplianceManagement } from "./base/ComplianceManagement";
import { ComplianceManagementService } from "./complianceManagement.service";

@graphql.Resolver(() => ComplianceManagement)
export class ComplianceManagementResolver extends ComplianceManagementResolverBase {
  constructor(protected readonly service: ComplianceManagementService) {
    super(service);
  }
}

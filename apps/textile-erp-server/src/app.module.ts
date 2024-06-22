import { Module } from "@nestjs/common";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { ManufacturingModule } from "./manufacturing/manufacturing.module";
import { CrmModule } from "./crm/crm.module";
import { RetailModule } from "./retail/retail.module";
import { HrmsModule } from "./hrms/hrms.module";
import { AccountsBudgetingModule } from "./accountsBudgeting/accountsBudgeting.module";
import { ScmModule } from "./scm/scm.module";
import { PlmModule } from "./plm/plm.module";
import { MlModule } from "./ml/ml.module";
import { BiModule } from "./bi/bi.module";
import { ProjectManagementModule } from "./projectManagement/projectManagement.module";
import { ComplianceManagementModule } from "./complianceManagement/complianceManagement.module";
import { QmsModule } from "./qms/qms.module";
import { EcommerceIntegrationModule } from "./ecommerceIntegration/ecommerceIntegration.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    WarehouseModule,
    ManufacturingModule,
    CrmModule,
    RetailModule,
    HrmsModule,
    AccountsBudgetingModule,
    ScmModule,
    PlmModule,
    MlModule,
    BiModule,
    ProjectManagementModule,
    ComplianceManagementModule,
    QmsModule,
    EcommerceIntegrationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

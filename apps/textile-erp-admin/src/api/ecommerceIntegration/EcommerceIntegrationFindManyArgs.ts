import { EcommerceIntegrationWhereInput } from "./EcommerceIntegrationWhereInput";
import { EcommerceIntegrationOrderByInput } from "./EcommerceIntegrationOrderByInput";

export type EcommerceIntegrationFindManyArgs = {
  where?: EcommerceIntegrationWhereInput;
  orderBy?: Array<EcommerceIntegrationOrderByInput>;
  skip?: number;
  take?: number;
};

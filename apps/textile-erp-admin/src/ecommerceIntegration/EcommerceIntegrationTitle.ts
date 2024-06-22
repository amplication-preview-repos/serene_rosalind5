import { EcommerceIntegration as TEcommerceIntegration } from "../api/ecommerceIntegration/EcommerceIntegration";

export const ECOMMERCEINTEGRATION_TITLE_FIELD = "id";

export const EcommerceIntegrationTitle = (
  record: TEcommerceIntegration
): string => {
  return record.id?.toString() || String(record.id);
};

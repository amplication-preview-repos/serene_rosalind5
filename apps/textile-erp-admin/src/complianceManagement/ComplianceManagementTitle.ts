import { ComplianceManagement as TComplianceManagement } from "../api/complianceManagement/ComplianceManagement";

export const COMPLIANCEMANAGEMENT_TITLE_FIELD = "id";

export const ComplianceManagementTitle = (
  record: TComplianceManagement
): string => {
  return record.id?.toString() || String(record.id);
};

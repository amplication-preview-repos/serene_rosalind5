import { Crm as TCrm } from "../api/crm/Crm";

export const CRM_TITLE_FIELD = "id";

export const CrmTitle = (record: TCrm): string => {
  return record.id?.toString() || String(record.id);
};

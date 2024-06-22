import { Plm as TPlm } from "../api/plm/Plm";

export const PLM_TITLE_FIELD = "id";

export const PlmTitle = (record: TPlm): string => {
  return record.id?.toString() || String(record.id);
};

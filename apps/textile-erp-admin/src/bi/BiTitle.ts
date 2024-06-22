import { Bi as TBi } from "../api/bi/Bi";

export const BI_TITLE_FIELD = "id";

export const BiTitle = (record: TBi): string => {
  return record.id?.toString() || String(record.id);
};

import { Retail as TRetail } from "../api/retail/Retail";

export const RETAIL_TITLE_FIELD = "id";

export const RetailTitle = (record: TRetail): string => {
  return record.id?.toString() || String(record.id);
};

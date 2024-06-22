import { Ml as TMl } from "../api/ml/Ml";

export const ML_TITLE_FIELD = "id";

export const MlTitle = (record: TMl): string => {
  return record.id?.toString() || String(record.id);
};

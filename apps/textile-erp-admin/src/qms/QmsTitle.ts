import { Qms as TQms } from "../api/qms/Qms";

export const QMS_TITLE_FIELD = "id";

export const QmsTitle = (record: TQms): string => {
  return record.id?.toString() || String(record.id);
};

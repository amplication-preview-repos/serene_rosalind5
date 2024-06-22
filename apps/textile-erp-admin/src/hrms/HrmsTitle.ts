import { Hrms as THrms } from "../api/hrms/Hrms";

export const HRMS_TITLE_FIELD = "id";

export const HrmsTitle = (record: THrms): string => {
  return record.id?.toString() || String(record.id);
};

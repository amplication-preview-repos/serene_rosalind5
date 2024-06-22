import { Manufacturing as TManufacturing } from "../api/manufacturing/Manufacturing";

export const MANUFACTURING_TITLE_FIELD = "id";

export const ManufacturingTitle = (record: TManufacturing): string => {
  return record.id?.toString() || String(record.id);
};

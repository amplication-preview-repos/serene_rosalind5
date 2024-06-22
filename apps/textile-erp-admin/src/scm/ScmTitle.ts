import { Scm as TScm } from "../api/scm/Scm";

export const SCM_TITLE_FIELD = "id";

export const ScmTitle = (record: TScm): string => {
  return record.id?.toString() || String(record.id);
};

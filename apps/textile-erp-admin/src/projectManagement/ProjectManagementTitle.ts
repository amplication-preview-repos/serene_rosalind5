import { ProjectManagement as TProjectManagement } from "../api/projectManagement/ProjectManagement";

export const PROJECTMANAGEMENT_TITLE_FIELD = "id";

export const ProjectManagementTitle = (record: TProjectManagement): string => {
  return record.id?.toString() || String(record.id);
};

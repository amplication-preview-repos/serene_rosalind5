import { ProjectManagementWhereInput } from "./ProjectManagementWhereInput";
import { ProjectManagementOrderByInput } from "./ProjectManagementOrderByInput";

export type ProjectManagementFindManyArgs = {
  where?: ProjectManagementWhereInput;
  orderBy?: Array<ProjectManagementOrderByInput>;
  skip?: number;
  take?: number;
};

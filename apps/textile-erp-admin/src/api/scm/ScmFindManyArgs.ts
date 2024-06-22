import { ScmWhereInput } from "./ScmWhereInput";
import { ScmOrderByInput } from "./ScmOrderByInput";

export type ScmFindManyArgs = {
  where?: ScmWhereInput;
  orderBy?: Array<ScmOrderByInput>;
  skip?: number;
  take?: number;
};

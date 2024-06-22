import { MlWhereInput } from "./MlWhereInput";
import { MlOrderByInput } from "./MlOrderByInput";

export type MlFindManyArgs = {
  where?: MlWhereInput;
  orderBy?: Array<MlOrderByInput>;
  skip?: number;
  take?: number;
};

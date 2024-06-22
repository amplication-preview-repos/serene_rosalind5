import { HrmsWhereInput } from "./HrmsWhereInput";
import { HrmsOrderByInput } from "./HrmsOrderByInput";

export type HrmsFindManyArgs = {
  where?: HrmsWhereInput;
  orderBy?: Array<HrmsOrderByInput>;
  skip?: number;
  take?: number;
};

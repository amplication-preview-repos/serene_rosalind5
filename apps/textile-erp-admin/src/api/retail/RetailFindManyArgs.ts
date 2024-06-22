import { RetailWhereInput } from "./RetailWhereInput";
import { RetailOrderByInput } from "./RetailOrderByInput";

export type RetailFindManyArgs = {
  where?: RetailWhereInput;
  orderBy?: Array<RetailOrderByInput>;
  skip?: number;
  take?: number;
};

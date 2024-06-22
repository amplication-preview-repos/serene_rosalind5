import { AccountsBudgetingWhereInput } from "./AccountsBudgetingWhereInput";
import { AccountsBudgetingOrderByInput } from "./AccountsBudgetingOrderByInput";

export type AccountsBudgetingFindManyArgs = {
  where?: AccountsBudgetingWhereInput;
  orderBy?: Array<AccountsBudgetingOrderByInput>;
  skip?: number;
  take?: number;
};

import { PlmWhereInput } from "./PlmWhereInput";
import { PlmOrderByInput } from "./PlmOrderByInput";

export type PlmFindManyArgs = {
  where?: PlmWhereInput;
  orderBy?: Array<PlmOrderByInput>;
  skip?: number;
  take?: number;
};

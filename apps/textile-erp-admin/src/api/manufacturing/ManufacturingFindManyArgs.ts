import { ManufacturingWhereInput } from "./ManufacturingWhereInput";
import { ManufacturingOrderByInput } from "./ManufacturingOrderByInput";

export type ManufacturingFindManyArgs = {
  where?: ManufacturingWhereInput;
  orderBy?: Array<ManufacturingOrderByInput>;
  skip?: number;
  take?: number;
};

import { BiWhereInput } from "./BiWhereInput";
import { BiOrderByInput } from "./BiOrderByInput";

export type BiFindManyArgs = {
  where?: BiWhereInput;
  orderBy?: Array<BiOrderByInput>;
  skip?: number;
  take?: number;
};

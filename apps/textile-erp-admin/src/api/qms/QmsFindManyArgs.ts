import { QmsWhereInput } from "./QmsWhereInput";
import { QmsOrderByInput } from "./QmsOrderByInput";

export type QmsFindManyArgs = {
  where?: QmsWhereInput;
  orderBy?: Array<QmsOrderByInput>;
  skip?: number;
  take?: number;
};

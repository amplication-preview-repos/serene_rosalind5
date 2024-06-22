import { AccountsBudgeting as TAccountsBudgeting } from "../api/accountsBudgeting/AccountsBudgeting";

export const ACCOUNTSBUDGETING_TITLE_FIELD = "id";

export const AccountsBudgetingTitle = (record: TAccountsBudgeting): string => {
  return record.id?.toString() || String(record.id);
};

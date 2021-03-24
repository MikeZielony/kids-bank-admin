
import {Operation} from "./operation";

export class Account{
  key: string;
  id: number;
  name: string;
  balance: number;
  cardId: string;
  operation: number;
  operationName?: string;
  operations: Operation[] = [];
}

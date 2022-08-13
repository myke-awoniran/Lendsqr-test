import { Transaction } from '../repositories/transactions.entity';

class TransactionService {
  constructor(private Transaction: any) {
    this.Transaction = Transaction;
  }

  async initiateTransfer() {}

  async finalizeTransfer() {}
}

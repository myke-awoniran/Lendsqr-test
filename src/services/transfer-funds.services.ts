import { Transaction } from '../repositories/transactions.entity';
import { RequestBody } from '../paystack/paystack.api';
import { NextFunction } from 'express';

class TransactionService {
  constructor(private Transaction: any) {
    this.Transaction = Transaction;
  }

  async initiateTransfer() {}

  async finalizeTransfer() {}
}

import { Model } from 'objection';

export class Transaction extends Model {
  static get tableName() {
    return 'transactions';
  }

  static get customerIdColumn() {
    return 'customer_id';
  }

  static get transactionType() {
    return 'type';
  }

  static get transactionAmount() {
    return 'amount';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['customer_id', 'amount', 'type'],
      properties: {
        id: { type: 'integer' },
        // AMOUNT IS NOT ALWAYS AN INTEGER!!!
        amount: { type: 'number' },
        customer_id: { type: 'integer' },
        type: { type: 'string', enum: ['credit', 'debit'] },
      },
    };
  }
}

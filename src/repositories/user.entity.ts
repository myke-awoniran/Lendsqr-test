import { Model } from 'objection';
import { Transaction } from './transactions.entity';

export class Customer extends Model {
  //
  static get tableName() {
    return 'customers';
  }

  static get firstName() {
    return 'first_name';
  }

  static get lastName() {
    return 'last_name';
  }

  static get emailColumn() {
    return 'email';
  }

  static get passwordColumn() {
    return 'password';
  }
  static get addressColumn() {
    return 'address';
  }
  static get paystackId() {
    return 'paystack_id';
  }
  static get customerCode() {
    return 'customer_code';
  }
  static get accountType() {
    return 'account_type';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email', 'password'],
      //   unique: ['email'],
      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 4, maxLength: 50 },
        last_name: { type: 'string', minLength: 4, maxLength: 50 },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    };
  }

  static relationMappings = {
    transactions: {
      // A CUSTOMER CAN HAVE MULTIPLE TRANSACTIONS BUT A TRANSACTION CAN
      // BE ASSOCIATED TO A SINGLE CUSTOMER
      relation: Model.HasOneRelation,
      modelClass: Transaction,
      join: {
        from: 'Customer.id',
        to: 'transactions.customer_id',
      },
    },
  };
}

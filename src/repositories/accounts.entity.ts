import { Model } from 'objection';
import { Customer } from './user.entity';

export class Account extends Model {
  //
  static get tableName() {
    return 'accounts';
  }

  static get accountType() {
    return 'account_type';
  }

  static get accountNumber() {
    return 'account_number';
  }

  static get accountName() {
    return 'account_name';
  }

  static get customerId() {
    return 'customer_id';
  }

  static relationMappings = {
    transactions: {
      relation: Model.HasOneRelation,
      modelClass: Customer,
      join: {
        from: 'Account.id',
        to: 'Customer',
      },
    },
  };
}

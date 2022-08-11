import { User } from '../dtos/create-user.dtos';
import { Customer } from '../repositories/user.entity';

class UserService {
  constructor(private Customer: any) {
    this.Customer = Customer;
  }

  async findOne(id: number) {
    return await this.Customer.query().findById(id);
  }

  async create(body: User) {
    return await this.Customer.query().insert(body);
  }

  async update(body: User) {
    return await this.Customer.query().patch(body);
  }

  async findOneByEmail(email: string) {
    return await this.Customer.query().where('email', email);
  }

  async find() {
    return await this.Customer.query();
  }
}

export const Users = new UserService(Customer);

import { ICreateCustomer } from '@modules/customers/infra/typeorm/entities/ICreateCustomer';
import { ICustomer } from '../models/iCustomer';

export interface ICustomersRepository {
  findByName(name: string): Promise<ICustomer | undefined>;

  findById(id: string): Promise<ICustomer | undefined>;

  findByEmail(email: string): Promise<ICustomer | undefined>;

  create(data: ICreateCustomer): Promise<ICustomer>;
  save(customer: ICustomer): Promise<ICustomer>;
}

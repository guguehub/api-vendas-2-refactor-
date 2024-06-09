import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import { instanceToInstance } from 'class-transformer';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ListUser = new ListUserService();

    console.log(request.user.id);

    const users = await ListUser.execute();

    return response.json(instanceToInstance(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(instanceToInstance(user));
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }
}

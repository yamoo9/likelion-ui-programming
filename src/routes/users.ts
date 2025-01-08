import { Router } from 'express';
import {
  createUserHander,
  deleteUserHandler,
  patchUserHandler,
  putUserHandler,
  readAllUsersHandler,
  readUserByIdHandler,
} from '../handlers/users';

const usersRouter = Router();

usersRouter.post('/', createUserHander);
usersRouter.get('/', readAllUsersHandler);
usersRouter.get('/:id', readUserByIdHandler);
usersRouter.put('/:id', putUserHandler);
usersRouter.patch('/:id', patchUserHandler);
usersRouter.delete('/:id', deleteUserHandler);

export default usersRouter;

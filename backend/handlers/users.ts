import type { Request, Response } from 'express';
import type { User, RequestUser } from '../types/user';
import { readUsers, writeUsers } from '../lib/users';

// CREATE ----------------------------------------------------------------------

// `POST /api/users`
export const createUserHander = async (
  request: Request<{}, {}, RequestUser>,
  response: Response
) => {
  const users = await readUsers();

  const newId = users.length + 1;
  // const newId = crypto.randomUUID();

  const newUser: User = {
    id: newId,
    ...request.body,
  };

  try {
    users.push(newUser);
    await writeUsers(users);
    response.status(201).json(newUser);
  } catch (error: unknown) {
    response.status(401).json({
      message: '이런... 사용자 정보 생성에 실패했습니다.. 😭',
    });
  }
};

// READ ------------------------------------------------------------------------

// `GET /api/users`
export const readAllUsersHandler = async (
  request: Request,
  response: Response<User[] | { message: string } | void>
) => {
  try {
    const users = await readUsers();
    response.status(200).json(users);
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다! 😥',
    });
  }
};

// `GET /api/users/:id`
export const readUserByIdHandler = async (
  request: Request,
  response: Response
) => {
  const id = Number(request.params.id);

  try {
    const users = await readUsers();

    // 요청된 ID 값과 일치하는 사용자가 존재하는 지 검토
    const requestedUser = users.find((user) => user.id === id);
    if (requestedUser) {
      // 요청한 사용자 정보가 있을 경우, 응답
      response.status(200).json(requestedUser);
    } else {
      // 요청한 사용자 정보가 없을 경우, 응답
      response.status(404).json({
        message: `요청한 사용자 ID "${id}" 정보가 존재하지 않습니다. 😥`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다! 😥',
    });
  }
};

// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`
export const putUserHandler = async (request: Request, response: Response) => {
  // 직접 구현해보세요. 😊
};

// `PATCH /api/users/:id`
export const patchUserHandler = async (
  request: Request<{ id: string }, {}, RequestUser>,
  response: Response
) => {
  const id = Number(request.params.id);
  const requestBody = request.body;

  try {
    const users = await readUsers();
    const user = users.find((user) => user.id === Number(id));

    if (user) {
      const updatedUser = {
        ...user,
        ...requestBody,
      };

      const willUpdateUsers = users.map((user) => {
        if (user.id === id) {
          return updatedUser;
        } else {
          return user;
        }
      });

      await writeUsers(willUpdateUsers);
      response.status(200).json(updatedUser);
    } else {
      response.status(404).json({
        message: `요청한 ID ${id} 사용자 정보를 찾을 수 없습니다.`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다.',
    });
  }
};

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id
export const deleteUserHandler = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  try {
    const users = await readUsers();
    const user = users.find((user) => user.id === Number(id));

    if (user) {
      const willUpdateUsers = users.filter((user) => user.id !== Number(id));
      await writeUsers(willUpdateUsers);
      response.status(200).json({});
    } else {
      response.status(404).json({
        message: `요청한 ID ${id} 사용자 정보를 찾을 수 없습니다.`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다.',
    });
  }
};

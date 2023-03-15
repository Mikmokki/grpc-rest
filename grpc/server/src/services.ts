import {
  ServerUnaryCall,
  sendUnaryData,
  ServerWritableStream,
  ServerReadableStream,
} from "grpc";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IUsersServer } from "../proto/users_grpc_pb";
import {
  User,
  UserRequest,
  UserStatus,
  UsersResponse,
} from "../proto/users_pb";
import { users, userToClass } from "./db";
const user = userToClass({
  id: 1,
  name: "Teddy",
  age: 25,
  status: UserStatus.BUSY,
  groupsList: ["car club"],
  avatar: undefined,
  verified: true,
});
const usersResponse = new UsersResponse();
usersResponse.setUsersList(users);
export class UsersServer implements IUsersServer {
  getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>) {
    const userId = call.request.getId();
    callback(null, user);
  }

  getUsersStream(call: ServerWritableStream<Empty>) {
    for (const user of users) call.write(user);
    call.end();
  }
  getUsersUnary(
    call: ServerUnaryCall<Empty>,
    callback: sendUnaryData<UsersResponse>
  ) {
    callback(null, usersResponse);
  }
  createUser(call: ServerUnaryCall<User>, callback: sendUnaryData<Empty>) {
    call.request;
    callback(null, new Empty());
  }
}

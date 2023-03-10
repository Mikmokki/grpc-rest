import {
  ServerUnaryCall,
  sendUnaryData,
  ServiceError,
  ServerWritableStream,
  ServerReadableStream,
} from "grpc";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IUsersServer } from "../proto/users_grpc_pb";
import { User, UserRequest, UserStatus } from "../proto/users_pb";
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
export class UsersServer implements IUsersServer {
  getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>) {
    const userId = call.request.getId();
    callback(null, user);
  }

  getUsers(call: ServerWritableStream<Empty>) {
    for (const user of users) call.write(user);
    call.end();
  }

  createUser(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    // console.log(`createUsers: creating new users from stream.`);

    let userCount = 0;

    call.on("data", (u) => {
      userCount++;
      u;
      // users.push(u);
    });

    call.on("end", () => {
      // console.log(`Created ${userCount} new user(s).`);
      callback(null, new Empty());
    });
  }
}

import { User, UserStatus } from "../proto/users_pb";

export const userToClass = ({
  id,
  name,
  age,
  status,
  groupsList,
  avatar,
  verified,
}: User.AsObject) => {
  const user = new User();
  user.setId(id);
  user.setName(name);
  user.setAge(age);
  user.setStatus(status);
  user.setGroupsList(groupsList);
  avatar && user.setAvatar(avatar);
  user.setVerified(verified);
  return user;
};

export const users: User[] = [
  {
    id: 1,
    name: "Teddy",
    age: 25,
    status: UserStatus.BUSY,
    groupsList: ["car club"],
    avatar: undefined,
    verified: true,
  },
  {
    id: 2,
    name: "Joss",
    age: 13,
    status: UserStatus.OFFLINE,
    groupsList: ["sewing club"],
    avatar: "nice.jpg",
    verified: false,
  },
].map(userToClass);

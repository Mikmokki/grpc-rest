// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUsersService_IGetUser;
    createUser: IUsersService_ICreateUser;
    getUsersStream: IUsersService_IGetUsersStream;
    getUsersUnary: IUsersService_IGetUsersUnary;
}

interface IUsersService_IGetUser extends grpc.MethodDefinition<users_pb.UserRequest, users_pb.User> {
    path: "/users.Users/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UserRequest>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUsersService_ICreateUser extends grpc.MethodDefinition<users_pb.User, google_protobuf_empty_pb.Empty> {
    path: "/users.Users/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IGetUsersStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_pb.User> {
    path: "/users.Users/GetUsersStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUsersService_IGetUsersUnary extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_pb.UsersResponse> {
    path: "/users.Users/GetUsersUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getUser: grpc.handleUnaryCall<users_pb.UserRequest, users_pb.User>;
    createUser: grpc.handleUnaryCall<users_pb.User, google_protobuf_empty_pb.Empty>;
    getUsersStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, users_pb.User>;
    getUsersUnary: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, users_pb.UsersResponse>;
}

export interface IUsersClient {
    getUser(request: users_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getUsersStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    getUsersStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    getUsersUnary(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsersUnary(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsersUnary(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: users_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getUsersStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    public getUsersStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    public getUsersUnary(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsersUnary(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsersUnary(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

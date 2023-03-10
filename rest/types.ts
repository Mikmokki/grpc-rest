export enum UserStatus {
  UNKNOWN = 'UNKNOWN',
  OFFLINE = 'OFFLINE',
  BUSY = 'BUSY',
  AVAILABLE = 'AVAILABLE',
}

export interface User {
  id: number;
  name: string;
  age: number;
  status: UserStatus;
  groupsList: string[];
  avatar?: string;
  verified: boolean;
}

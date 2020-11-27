const prefix = 'USER/';

export const UserTypes = {
  UPDATE_USER: `${prefix}UPDATE_USER`,
  CREATE_STREAM: `${prefix}CREATE_STREAM`,
};

export interface UserState {
  userId: string;
  userName: string;
  userEmoji: string;
  userStream: MediaStream | null;
}

export interface UpdateUserAction {
  type: typeof UserTypes.UPDATE_USER;
  payload: { [key in keyof Partial<UserState>]: any };
}

export interface CreateStreamAction {
  type: typeof UserTypes.CREATE_STREAM;
}

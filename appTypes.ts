export type UserT = {
  userid: string;
  name: string;
  online: boolean;
};
export type RoomT = {
  roomid: string;
  users: UserT[];
  host: UserT;
};
export type ServerStateT = {
  rooms: RoomT[];
};
export type ClinetStateT = {
  clientRoomid: string;
  user: UserT;
  room: RoomT;
};
export type generateNewRoomInputT = {
  userid: string;
  name: string;
  roomid: string;
};
export type joinExisitingRoomInputT = {
  userid: string;
  name: string;
  roomid: string;
};
export type leaveCurrentRoomInputT = {
  userid: string;
  name: string;
  roomid: string;
};
export type StoreT = {
  root: ClinetStateT;
};

export type SetNameActionT = {
  user: UserT;
  name: string;
};

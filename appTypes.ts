export type UserT = {
  roomid: string;
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
  rooms: { [roomid: string]: RoomT };
  users: { [userid: string]: UserT };
};
export type ClinetStateT = {
  user: UserT;
  room: RoomT;
};
export type StoreT = {
  root: ClinetStateT;
};
// redux server
export type WelcomeInputT = {
  userid: string;
};
export type SetNameInputT = {
  userid: string;
  name: string;
};
export type GenerateNewRoomInputT = {
  userid: string;
};
export type JoinExistingRoomInputT = {
  newRoomid: string;
  userid: string;
};
export type LeaveCurrentRoomInputT = {
  userid: string;
};

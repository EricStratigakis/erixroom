// import { v1 as uuid } from "uuid";
import { UserT, ClinetStateT, ServerStateT } from "./appTypes";

const initialUser: UserT = {
  userid: "some uuid()",
  name: "YOUR NAME HERE",
  online: true,
};

export const initialClientState: ClinetStateT = {
  clientRoomid: window.localStorage.getItem("clientRoomid") || "homeroom",
  user: initialUser,
  room: {
    roomid: "homeroom",
    host: initialUser,
    users: [initialUser],
  },
};
export const blankState: ClinetStateT = {
  clientRoomid: "1234",
  user: {
    userid: "4321",
    name: "blanky",
    online: true,
  },
  room: {
    roomid: "homeroom",
    host: {
      userid: "homid",
      name: "homie",
      online: true,
    },
    users: [initialUser],
  },
};

const homie: UserT = {
  userid: "homid",
  name: "homie",
  online: true,
};
export const initialServerState: ServerStateT = {
  rooms: [
    {
      roomid: "homeroom",
      host: homie,
      users: [homie],
    },
  ],
};

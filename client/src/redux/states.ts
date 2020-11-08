import { v1 as uuid } from "uuid";
import { UserT, ClinetStateT } from "../clientTypes";

const initialUser: UserT = {
  userid: window.localStorage.getItem("userid") || uuid(),
  name: window.localStorage.getItem("name") || "YOUR NAME HERE",
  online: true,
};

export const initialState: ClinetStateT = {
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

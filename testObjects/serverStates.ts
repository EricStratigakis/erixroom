import { ServerStateT } from "../appTypes";
import {
  ericInHomeOffline,
  ericInHomeOnline,
  homid,
  newbacca,
  newid,
  ericaInRoomAOnline,
  ericInRoomAOnline,
  sonjaInRoomAOnline,
  sonjaInHomeOnline,
} from "./users";
import {
  homieAlone,
  ericOnlineInHomeRoom,
  ericOfflineInHomeRoom,
  newbaccaInHome,
  newidInHome,
  ericHostRoomA,
  sonjaHostRoomA,
  ericaHostRoomA,
  ericHostRoomASonjaInRoomAOnline,
  sonjaOnlineInHomeRoom,
} from "./rooms";

export const initailServerState: ServerStateT = {
  rooms: {
    homeroom: homieAlone,
  },
  users: {
    homid: homid,
  },
};
export const WelcomeServerState: ServerStateT = {
  rooms: {
    homeroom: newidInHome,
  },
  users: {
    homid: homid,
    newid: newid,
  },
};
export const newbaccaServerState: ServerStateT = {
  rooms: {
    homeroom: newbaccaInHome,
  },
  users: {
    homid: homid,
    newid: newbacca,
  },
};
export const ericInHomeOfflineServerState: ServerStateT = {
  rooms: {
    homeroom: ericOfflineInHomeRoom,
  },
  users: {
    homid: homid,
    ericid: ericInHomeOffline,
  },
};
export const ericInHomeOnlineServerState: ServerStateT = {
  rooms: {
    homeroom: ericOnlineInHomeRoom,
  },
  users: {
    homid: homid,
    ericid: ericInHomeOnline,
  },
};
export const ericHostRoomAOnlineServerState: ServerStateT = {
  rooms: {
    homeroom: homieAlone,
    RoomA: ericHostRoomA,
  },
  users: {
    homid: homid,
    ericid: ericInRoomAOnline,
  },
};
export const ericaHostRoomAOnlineServerState: ServerStateT = {
  rooms: {
    homeroom: homieAlone,
    RoomA: ericaHostRoomA,
  },
  users: {
    homid: homid,
    ericid: ericaInRoomAOnline,
  },
};
export const ericHostRoomASonjaInHomeroomOnlineSereverState: ServerStateT = {
  rooms: {
    homeroom: sonjaOnlineInHomeRoom,
    RoomA: ericHostRoomA,
  },
  users: {
    homid: homid,
    ericid: ericInRoomAOnline,
    sonjaid: sonjaInHomeOnline,
  },
};
export const ericHostRoomASonjaInRoomAOnlineSereverState: ServerStateT = {
  rooms: {
    homeroom: homieAlone,
    RoomA: ericHostRoomASonjaInRoomAOnline,
  },
  users: {
    homid: homid,
    ericid: ericInRoomAOnline,
    sonjaid: sonjaInRoomAOnline,
  },
};
export const ericInHomeOnlineSonjaHostRoomAServerState: ServerStateT = {
  rooms: {
    homeroom: ericOnlineInHomeRoom,
    RoomA: sonjaHostRoomA,
  },
  users: {
    homid: homid,
    ericid: ericInHomeOnline,
    sonjaid: sonjaInRoomAOnline,
  },
};

import { RoomT } from "../appTypes";
import {
  homid,
  ericInHomeOnline,
  ericInHomeOffline,
  ericInRoomAOnline,
  ericaInRoomAOnline,
  sonjaInHomeOnline,
  sonjaInHomeOffline,
  sonjaInRoomAOnline,
  sonjaInRoomAOffline,
  newbacca,
  newid,
} from "./users";

export const homieAlone: RoomT = {
  users: [homid],
  host: homid,
  roomid: "homeroom",
};
export const newidInHome: RoomT = {
  users: [homid, newid],
  host: homid,
  roomid: "homeroom",
};
export const newbaccaInHome: RoomT = {
  users: [homid, newbacca],
  host: homid,
  roomid: "homeroom",
};
export const ericOnlineInHomeRoom: RoomT = {
  users: [homid, ericInHomeOnline],
  host: homid,
  roomid: "homeroom",
};
export const ericOfflineInHomeRoom: RoomT = {
  users: [homid, ericInHomeOffline],
  host: homid,
  roomid: "homeroom",
};
export const sonjaOnlineInHomeRoom: RoomT = {
  users: [homid, sonjaInHomeOnline],
  host: homid,
  roomid: "homeroom",
};
export const ericAndSonjaOnlineInHomeRoom: RoomT = {
  users: [homid, ericInHomeOnline, sonjaInHomeOnline],
  host: homid,
  roomid: "homeroom",
};
export const ericAndSonjaOfflineInHomeRoom: RoomT = {
  users: [homid, ericInHomeOffline, sonjaInHomeOffline],
  host: homid,
  roomid: "homeroom",
};
export const ericOfflineAndSonjaOnlineInHomeRoom: RoomT = {
  users: [homid, ericInHomeOffline, sonjaInHomeOnline],
  host: homid,
  roomid: "homeroom",
};
export const ericHostRoomA: RoomT = {
  users: [ericInRoomAOnline],
  host: ericInRoomAOnline,
  roomid: "RoomA",
};
export const ericaHostRoomA: RoomT = {
  users: [ericaInRoomAOnline],
  host: ericaInRoomAOnline,
  roomid: "RoomA",
};
export const sonjaHostRoomA: RoomT = {
  users: [sonjaInRoomAOnline],
  host: sonjaInRoomAOnline,
  roomid: "RoomA",
};
export const ericHostRoomASonjaInRoomAOnline: RoomT = {
  users: [ericInRoomAOnline, sonjaInRoomAOnline],
  host: ericInRoomAOnline,
  roomid: "RoomA",
};
export const ericHostRoomASonjaInRoomAOffline: RoomT = {
  users: [ericInRoomAOnline, sonjaInRoomAOffline],
  host: ericInRoomAOnline,
  roomid: "RoomA",
};

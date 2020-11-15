import { ClinetStateT } from "../appTypes";
import { ericInHomeOnline } from "../testObjects/users";
import { ericOnlineInHomeRoom } from "../testObjects/rooms";

export const initalClientState: ClinetStateT = {
  user: ericInHomeOnline,
  room: ericOnlineInHomeRoom,
};

import { gql } from "@apollo/client";

export const WELCOME = gql`
  mutation($userid: ID!) {
    welcome(userid: $userid) {
      user {
        userid
        name
        online
        roomid
      }
      room {
        users {
          userid
          roomid
          name
          online
        }
        roomid
        host {
          userid
          roomid
          name
          online
        }
      }
    }
  }
`;

export const SUBSCRIBE = gql`
  subscription($userid: ID!) {
    subscribeToRoom(userid: $userid) {
      user {
        userid
        name
        online
        roomid
      }
      room {
        users {
          userid
          roomid
          name
          online
        }
        roomid
        host {
          userid
          roomid
          name
          online
        }
      }
    }
  }
`;

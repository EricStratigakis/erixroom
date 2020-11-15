import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { WELCOME } from "../../queries";
import { initalClientState } from "../../../../testObjects/clientStates";
import { UserT } from "../../../../appTypes";

export const homid: UserT = {
  userid: "homid",
  name: "homie",
  online: true,
  roomid: "homeroom",
};

const mocks = [
  {
    request: {
      query: WELCOME,
      variables: { userid: "d3e0ef-2beb-aebb-21d3-e40fbc617c2" },
    },
    result: {
      data: {
        room: {
          host: {},
        },
      },
    },
  },
];

describe("App Renders Correct Component", () => {
  test("renders Home component when room is the homeroom", () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    const linkElement = screen.getByTestId("Home");
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Room component when the room is not the homeroom", () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    const linkElement = screen.getByTestId("Home");
    expect(linkElement).toBeInTheDocument();
  });
});

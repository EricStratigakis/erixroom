import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useSubscription } from "@apollo/client";
import Home from "../Home/Home";

import { SUBSCRIBE, WELCOME } from "../../queries";
import { v1 as uuid } from "uuid";
import { welcome } from "../../redux/rootSlice/rootSlice";
import { RootState } from "../../redux/store/store";

const App = () => {
  const [timesAppRenders, setTimesAppRenders] = useState(0);
  const [welcomeHook] = useMutation(WELCOME);
  // const [subscriptionHook] = useSubscription(SUBSCRIBE);
  const dispatch = useDispatch();
  const userid = useSelector((state: RootState) => state.root.user.userid);
  useEffect(() => {
    welcomeHook({
      variables: { userid: window.localStorage.getItem("userid") || uuid() },
    }).then((res) => dispatch(welcome(res.data.welcome)));
    document.title = `App Rendered ${timesAppRenders} times`;
  }, []);

  return (
    <div data-testid="App">
      <button
        onClick={() => {
          console.log(userid);
        }}
      >
        sattta
      </button>
      <Home />
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import axios from "axios";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "";
//   "2f53941f5f94bf33159642fe5403a4002e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") alert("Executed!");
      },
    });
  }, []);
  return <div>Hi!</div>;
};

export default App;

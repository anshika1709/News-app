import React, { useEffect, useState } from "react";
import axios from "axios";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";

const alanKey =
  "2f53941f5f94bf33159642fe5403a4002e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") setNewsArticles(articles);
      },
    });
  }, []);

  return (
    <div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;

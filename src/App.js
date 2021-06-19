import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";
import useStyles from "./styles";

const alanKey = "2f53941f5f94bf33159642fe5403a4002e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
      },
    });
  }, []);

  return (
    <div className={classes.container} container>
      <div className={classes.logoContainer}>
        <img src="https://www.letsnurture.com/wp-content/uploads/2018/01/VE2.png" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;

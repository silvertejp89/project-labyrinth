import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { game } from "./reducers/game";
import { Game } from "./components/Game";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
    //-----temporary alert------------------
   useEffect(() => {
    const handleLoad = () => {
      alert('🛠️ Database Offline: the website is currently undergoing maintenance, but feel free to check out the code on github in the meantime!');
    };

    window.onload = handleLoad;

    // Clean up the event listener on component unmount
    return () => {
      window.onload = null;
    };
  }, []);
  //------------------------------------------
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

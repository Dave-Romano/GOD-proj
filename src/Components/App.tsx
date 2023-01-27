import React from "react";
import { AppStyled } from "./AppStyled";
// import Navigation from "./navigation/Navigation";
// import { Routes, Route } from "react-router-dom";
// import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import CounterPage from "../pages/counterPage/CounterPage";
import Header from "../pages/header/Header";
// import CreatorPage from "../pages/creatorPage/CreatorPage";
import PlayerCreatorPage from "../pages/playerCreatorPage/playerCreatorPage";

import Temp from "./temp/Temp";

// 1. Сохранение данных в local Storage
// 2. Прописать карточку игрока
// 3. Добавить эффекты
// 4. Добавить погоду
// 5. Разбить всё на компоненты
// 6. Сделать код адекватным
//
// 1. login admin/user
// 2. Counter
// 3. Creator admin
// 4. Inventory user
// 5.

function App() {
  return (
    <AppStyled className="App">
      <div className="mainContainer">
        <PlayerCreatorPage />
        {/* <NotFoundPage /> */}
        {/* <Header /> */}
        {/* <CounterPage /> */}
        {/* <Temp /> */}

        {/* <Navigation />
        <Routes>
          <Route path="/" element={<CounterPage />}></Route>
          <Route path="/GODCounter" element={<CounterPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/creator" element={<CreatorPage />}></Route>
        </Routes> */}
      </div>
    </AppStyled>
  );
}

export default App;

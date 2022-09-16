import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameCard } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { TGame } from "./types/TGame";

import logoImg from "./assets/logo-nlw-esports.svg";
import { Input } from "./components/form/Input";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

function App() {
  const [games, setGames] = React.useState<TGame[]>([]);

  React.useEffect(() => {
    axios("http://localhost:3334/games/").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="my-20 mx-auto flex max-w-[1344px] flex-col items-center">
      <img src={logoImg} alt="" className="" />
      <h1 className="mt-20 text-6xl font-black text-white">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="mt-16 grid grid-cols-3 gap-6 md:grid-cols-6">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>{" "}
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameCard } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { TGame } from "./types/TGame";
import { GameController } from "phosphor-react";

import logoImg from "../public/logo-nlw-esports.svg";
import { Input } from "./components/form/Input";

function App() {
  const [games, setGames] = React.useState<TGame[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:3334/games/")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
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

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60">
            <Dialog.Content className="fixed top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#2A2634] py-8 px-10 text-white shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">
                Publique um anúncio
              </Dialog.Title>

              <form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Qual o jogo?
                  </label>
                  <Input
                    id="game"
                    placeholder="Selecione o jogo que deseja jogar"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input
                    id="name"
                    placeholder="Como te chamam dentro do jogo?"
                  />
                </div>

                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input
                      type="number"
                      id="yearsPlaying"
                      placeholder="Tudo bem ser zero"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <Input id="discord" placeholder="Usuario#0000'" />
                  </div>

                  <div className="col-span-2 flex gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="weekDays">Quando costuma jogar?</label>
                      <div className="grid grid-cols-7 gap-x-1 text-sm font-semibold">
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Domingo"
                        >
                          D
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Segunda"
                        >
                          S
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Terça"
                        >
                          T
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Quarta"
                        >
                          Q
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Quinta"
                        >
                          Q
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Sexta"
                        >
                          S
                        </button>
                        <button
                          className="h-8 w-8 rounded bg-zinc-900"
                          title="Sábado"
                        >
                          S
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <label htmlFor="hourStart">Qual horário do dia?</label>
                      <div className="flex gap-2">
                        <Input type="time" id="hourStart" placeholder="De" />
                        <Input type="time" id="hourEnd" placeholder="Até" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close className="h-12 rounded-md bg-zinc-500 px-5 font-semibold hover:bg-zinc-600">
                    Cancelar
                  </Dialog.Close>
                  <button className="flex h-12 items-center gap-x-3 rounded-md bg-violet-500 px-5 font-semibold hover:bg-violet-600">
                    <GameController size={24} />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;

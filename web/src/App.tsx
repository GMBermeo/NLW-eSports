import { MagnifyingGlass } from "phosphor-react";

import logoImg from "./assets/logo-nlw-esports.svg";

function App() {
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
      <div className="mt-16 grid grid-cols-6 gap-6">
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-1.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">
              League of Legends
            </strong>
            <span className="block text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-2.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">Dota 2</strong>
            <span className="block text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-3.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">
              Counter-Strike
            </strong>
            <span className="block text-sm text-zinc-300">9 anúncios</span>
          </div>
        </a>
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-4.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">Apex Legends</strong>
            <span className="block text-sm text-zinc-300">7 anúncios</span>
          </div>
        </a>
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-5.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">Fortnite</strong>
            <span className="block text-sm text-zinc-300">123 anúncios</span>
          </div>
        </a>
        <a href="" className="relative overflow-hidden rounded-lg">
          <img src="/game-6.png" alt="" />

          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">
              World of Warcraft
            </strong>
            <span className="block text-sm text-zinc-300">1 anúncios</span>
          </div>
        </a>
      </div>{" "}
      <div className="mt-8 self-stretch overflow-hidden rounded-lg bg-nlw-gradient pt-1">
        <div className="flex items-center justify-between bg-[#2A2634] px-8 py-6">
          <div>
            <strong className="block text-2xl font-black text-white">
              Não encontrou seu duo?
            </strong>
            <span className=" text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="itemsn-center flex gap-3 rounded bg-violet-500 py-3 px-4 text-white hover:bg-violet-600">
            <MagnifyingGlass size={20} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

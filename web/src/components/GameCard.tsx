import React from "react";

interface GameCardProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export const GameCard = (props: GameCardProps) => {
  return (
    <a href="" className="relative overflow-hidden rounded-lg">
      <img src={props.bannerUrl} alt="" />

      <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pt-16 pb-4">
        <strong className="block font-bold text-white">{props.title}</strong>
        <span className="block text-sm text-zinc-300">
          {props.adsCount} {props.adsCount > 1 ? "anúncio" : "anúncios"}
        </span>
      </div>
    </a>
  );
};

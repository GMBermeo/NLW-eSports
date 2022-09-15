import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const CreateAdBanner = () => {
  return (
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
        <Dialog.Trigger className="itemsn-center flex gap-3 rounded bg-violet-500 py-3 px-4 text-white hover:bg-violet-600">
          <MagnifyingGlass size={20} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

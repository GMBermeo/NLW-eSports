import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import React from "react";
import { Input } from "./form/Input";
import { TGame } from "../types/TGame";
import axios from "axios";

export const CreateAdModal = () => {
  const [games, setGames] = React.useState<TGame[]>([]);
  const [weekDays, setWeekDays] = React.useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = React.useState<boolean>(false);

  React.useEffect(() => {
    axios("http://localhost:3334/games/").then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateAd(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name || !data.discord || !data.yearsPlaying) {
      return;
    }
    try {
      await axios.post(`http://localhost:3334/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert("Anúncio criado com sucesso");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar o anúncio");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60">
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#2A2634] py-8 px-10 text-white shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form onSubmit={handleCreateAd} className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o jogo?
              </label>
              <select
                id="game"
                name="game"
                className="appearance-none rounded bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500"
                defaultValue={""}
              >
                <option value="" disabled>
                  Selecione o jogo que deseja jogar
                </option>
                {games.map((game) => {
                  return (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input id="name" placeholder="Como te chamam dentro do jogo?" />
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
                  <ToggleGroup.Root
                    type="multiple"
                    className="grid grid-cols-4 gap-2 text-sm font-semibold"
                    value={weekDays}
                    onValueChange={setWeekDays}
                  >
                    <ToggleGroup.Item
                      value="0"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("0")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Domingo"
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("1")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Segunda"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("2")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Terça"
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("3")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Quarta"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("4")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Quinta"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("5")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Sexta"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      className={`h-8 w-8 rounded ${
                        weekDays.includes("6")
                          ? "bg-violet-500"
                          : " bg-zinc-900"
                      }`}
                      title="Sábado"
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
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
            <label className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setUseVoiceChannel(true);
                  } else {
                    setUseVoiceChannel(false);
                  }
                }}
                className="h-6 w-6 rounded bg-zinc-900 p-1"
              >
                <Checkbox.CheckboxIndicator>
                  <Check className="h-4 w-4 text-emerald-400" />
                </Checkbox.CheckboxIndicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>
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
  );
};

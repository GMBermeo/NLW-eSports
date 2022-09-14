import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();
/**
Tipos de parâmetros
Query
Route
Body
 */

// HTTP methods / API RESTful / HTTP Codes

// GET, POST, PUT, PATCH, DELETE

// Listagem de jogos com contagem de anuncios
app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return response.json(games);
});

// Criação de novo anúncio
app.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(""),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return response.status(201).json(ad);
});

// Listagem de anúncios por jogo
app.get("/games/:id/ads", async (request, response) => {
  const gameId: any = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinutesToHourString(ad.hourStart),
        hoursEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

//Buscar discord pelo ID do anúncio
app.get("/ads/:id/discord", async (request, response) => {
  const adId: string = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: { discord: true },
    where: {
      id: adId,
    },
  });

  return response.json({ discord: ad.discord });
});

// localhost:3334
app.listen(3334);

"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

export const fetchAnime = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

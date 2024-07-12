import { useState } from "react";

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

function useGames() {

    export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

    const [games, setGames] = useState<Game[]>([]);

}

export default useGames
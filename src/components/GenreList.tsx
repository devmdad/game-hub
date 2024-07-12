import axios from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  HStack,
  Heading,
  Image,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";

function GenreList() {
  

  
  useEffect(() => {
    const controller = new AbortController();
    const fetchGenre = async () => {
      setLoading(true);
      await apiClient
        .get("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    };
    fetchGenre();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Genres
      </Text>
      {isLoading && <Spinner />}
      {generes.map((e) => (
        <HStack key={e.id} marginTop={4} cursor={"pointer"}>
          <Image
            src={e.image_background}
            width={"40px"}
            height={"40px"}
            rounded={"4px"}
          />
          <Text>{e.name}</Text>
        </HStack>
      ))}
    </div>
  );
}

export default GenreList;

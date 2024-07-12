import axios from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Box,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";



  
  const [isLoading, setLoading] = useState(false);

  const skeleton = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchGames = async () => {
      await apiClient
        .get("/games", { signal: controller.signal })
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    };
    fetchGames();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeleton.map((s) => (
            <Card>
              <Skeleton height="200px" />
              <CardBody>
                <SkeletonText></SkeletonText>
              </CardBody>
            </Card>
          ))}
        {games.map((game) => (
          <Box
            key={game.id}
            rounded={"md"}
            bgColor={"gray"}
            overflow={"hidden"}
          >
            <Image src={game.background_image} />
            <Text fontSize={"2xl"}>{game.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

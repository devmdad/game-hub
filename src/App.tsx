import { Grid, GridItem, HStack, chakra } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

function App() {
 

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <HStack justifyContent={"space-between"} p={4}>
        <GridItem area={"aside"} width={"400px"} hideBelow={"sm"}>
          <GenreList />
        </GridItem>
        <GridItem area={"main"} width={"100%"}>
          <GameGrid />
        </GridItem>
      </HStack>
    </Grid>
  );
}

export default App;

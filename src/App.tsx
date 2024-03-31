import { Grid, GridItem, chakra } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid templateAreas={"header header, aside main"}>
        <GridItem as={"header"}>
          <Navbar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

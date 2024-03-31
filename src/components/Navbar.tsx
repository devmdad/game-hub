import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack justifyContent={"space-between"} p={4}>
        <Image src={logo} width="80px" />
        <HStack>
          <Switch colorScheme="green" size="lg" defaultChecked onChange={toggleColorMode}  />
          <Text>Dark Mode</Text>
        </HStack>
      </HStack>
    </div>
  );
}

export default Navbar;

import { HStack, Image } from "@chakra-ui/react";
//import logo from "../assets/logo.webp";
import logo2 from "../assets/GameLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="12px">
      <Image src={logo2} boxSize="100px" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;

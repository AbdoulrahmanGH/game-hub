import { HStack, Image } from "@chakra-ui/react";
//import logo from "../assets/logo.webp";
import logo2 from "../assets/GameLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchString: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="12px">
      <Image src={logo2} boxSize="100px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;

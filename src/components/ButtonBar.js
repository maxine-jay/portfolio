import { Tooltip, IconButton, Icon, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeToggle from "@components/ColorModeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function ButtonBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Link href="https://github.com/maxine-jay" target="_blank">
        <Tooltip label="Github Repo">
          <IconButton size="lg" aria-label="Go to Maxine's Github Repository" color="orange">
            <Icon
              color={`${colorMode === "light" ? "black" : "white"}`}
              as={FaGithub}
            />
          </IconButton>
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/maxine-simpson-2b3750120/" target="_blank">
        <Tooltip label="LinkedIn Profile">
          <IconButton size="lg" aria-label="Go to Maxine's LinkedIn Profile">
            <Icon
              color={`${colorMode === "light" ? "black" : "white"}`}
              as={FaLinkedin}
            />
          </IconButton>
        </Tooltip>
      </Link>
      <ColorModeToggle mode={colorMode} toggle={toggleColorMode}></ColorModeToggle>
    </>
  );
}

export default ButtonBar;

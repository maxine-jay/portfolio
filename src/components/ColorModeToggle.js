import { IconButton, Tooltip } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ColorModeToggle({ mode, toggle }) {
  return (
    <>
      <Tooltip label={`${mode === "light" ? "Dark" : "Light"} Mode`}>
        <IconButton size="lg" onClick={toggle} aria-label="Toggle color mode">
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
}

export default ColorModeToggle;

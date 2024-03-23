import { Box, Typography } from "@mui/material";
import { Spinner, produceSpinnerProps } from "./_loadercode";
import { useSettingsStorage } from "@/lib/localStorage/settingsStorage";

export const ContainerLoader = () => {
  const theme = useSettingsStorage().getSettings().theme ?? "light";
  const spinners = produceSpinnerProps(7);

  const fgDarkmode = "#3c2969";
  const bgDarkmode = "#121212";

  const fgLightmode = "#977dc6";

  const foreground = theme === "light" ? fgLightmode : fgDarkmode;
  const textColor = theme === "light" ? bgDarkmode : fgLightmode;

  let keyItt = 0;

  return (
    <Box
      sx={{
        height: "75vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {spinners.map((p) => (
        <Spinner key={`spinner-${keyItt++}`} {...p} color={foreground} />
      ))}
    </Box>
  );
};

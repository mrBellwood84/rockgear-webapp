import { Box } from "@mui/material";
import { Spinner, produceSpinnerProps } from "./_loadercode";
import { useSettingsStorage } from "@/lib/localStorage/settingsStorage";

export const PageLoader = () => {
  const theme = useSettingsStorage().getSettings().theme ?? "light";

  const spinners = produceSpinnerProps(13);

  const fgDarkmode = "#3c2969";
  const bgDarkmode = "#121212";

  const fgLightmode = "#977dc6";
  const bgLightmode = "#eee";

  const background = theme === "light" ? bgLightmode : bgDarkmode;
  const foreground = theme === "light" ? fgLightmode : fgDarkmode;
  const textColor = theme === "light" ? bgDarkmode : fgLightmode;

  let keyItt = 0;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: background,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {spinners.map((p) => (
        <Spinner
          key={`pageloader-spinner-${keyItt++}`}
          {...p}
          color={foreground}
        />
      ))}
    </Box>
  );
};

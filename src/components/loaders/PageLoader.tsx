import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../lib/state/hooks";
import { Spinner, produceSpinnerProps } from "./_loadercode";

export const PageLoader = () => {
  const spinners = produceSpinnerProps(13);
  const theme = useAppSelector((state) => state.settings.themeMode);
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });

  const fgDarkmode = "#3c2969";
  const bgDarkmode = "#121212";

  const fgLightmode = "#977dc6";
  const bgLightmode = "#eee";

  const background = theme === "light" ? bgLightmode : bgDarkmode;
  const foreground = theme === "light" ? fgLightmode : fgDarkmode;
  const textColor = theme === "light" ? bgDarkmode : fgLightmode;

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
      <Typography
        variant="h3"
        sx={{ color: textColor, letterSpacing: 5, zIndex: 2 }}
      >
        {t("loading")}
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: textColor, letterSpacing: 5, zIndex: 2 }}
      >
        {t("waitPolite")}
      </Typography>
      {spinners.map((p) => (
        <Spinner {...p} color={foreground} />
      ))}
    </Box>
  );
};

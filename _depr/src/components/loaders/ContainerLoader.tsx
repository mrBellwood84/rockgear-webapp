import { Box, Typography } from "@mui/material";
import { Spinner, produceSpinnerProps } from "./_loadercode";
import { useAppSelector } from "../../lib/state/hooks";
import { useTranslation } from "react-i18next";

export const ContainerLoader = () => {
  const theme = useAppSelector((state) => state.settings.themeMode);
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });
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
        <Spinner key={`spinner-${keyItt++}`} {...p} color={foreground} />
      ))}
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../lib/redux/hooks";
import { useTranslation } from "react-i18next";

interface ISpinnerProps {
  color: string;
  borderWidth: number;
  size: number;
  animationSpeed: number;
  animationDirection: string;
  startRot: number;
}

const Spinner = ({
  color,
  borderWidth,
  size,
  animationSpeed,
  animationDirection,
  startRot,
}: ISpinnerProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: `calc(50% - ${size / 2}px)`,
        left: `calc(50% - ${size / 2}px)`,
        height: size,
        width: size,
        verticalAlign: "center",

        borderColor: color,
        borderTopStyle: "solid",
        borderTopWidth: borderWidth,
        borderRadius: "50%",
        rotate: `${startRot}deg`,

        animationName: "spin",
        animationDuration: `${animationSpeed}s`,
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: animationDirection,

        "@keyframes spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      }}
    />
  );
};

const produceSpinnerProps = (amount: number) => {
  const directions = ["normal", "reverse", "animationSpeed"];
  const innerRadius = 50;
  const radiusIncrement = 25;
  const borderWidth = radiusIncrement / 4.5;
  let spinners: ISpinnerProps[] = [];
  for (let i = 0; i < amount; i++) {
    const size = radiusIncrement * i + innerRadius;
    const startRot = Math.random() * 360;
    const animationSpeed = Math.random() * 3 + 1;
    const animationDirection =
      directions[Math.floor(Math.random() * directions.length)];
    spinners.push({
      color: "#123",
      borderWidth,
      size,
      animationSpeed,
      animationDirection,
      startRot,
    });
  }
  return spinners;
};

export const PageLoader = () => {
  const spinners = produceSpinnerProps(7);
  const theme = useAppSelector((state) => state.appSettings.themeMode);
  const { t } = useTranslation("translation", { keyPrefix: "form" });

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

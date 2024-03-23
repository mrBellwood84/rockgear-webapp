import { Box, SxProps, Typography } from "@mui/material";
import { produceSpinnerProps, Spinner } from "./_loadercode";
import { useSettingsStorage } from "@/lib/localStorage/settingsStorage";

interface IProps {
  text?: string;
  spinnerCount?: number;
  sx?: SxProps;
}

export const ComponentLoader = ({ text, spinnerCount = 3, sx }: IProps) => {
  const theme = useSettingsStorage().getSettings().theme ?? "light";

  const spinners = produceSpinnerProps(spinnerCount);

  const fgDarkmode = "#3c2969";
  const bgDarkmode = "#121212";

  const fgLightmode = "#977dc6";

  const foreground = theme === "light" ? fgLightmode : fgDarkmode;
  const textColor = theme === "light" ? bgDarkmode : fgLightmode;

  let keyItt = 0;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        overflow: "hidden",
        ...sx,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: textColor,
          textShadow: `1px 1px 1px ${theme === "light" ? "#eee" : "111"}`,
          letterSpacing: 5,
          zIndex: 2,
        }}
      >
        {text}
      </Typography>

      {spinners.map((p) => (
        <Spinner key={`spinner-${keyItt++}`} {...p} color={foreground} />
      ))}
    </Box>
  );
};

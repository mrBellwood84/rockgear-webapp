import { Box } from "@mui/material";

interface ISpinnerProps {
  color: string;
  borderWidth: number;
  size: number;
  animationSpeed: number;
  animationDirection: string;
  startRot: number;
}

export const Spinner = ({
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

export const produceSpinnerProps = (amount: number) => {
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

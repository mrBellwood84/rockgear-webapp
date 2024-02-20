import {
  Card,
  CardContent,
  Grid,
  Skeleton,
  SxProps,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  largeTitle?: string;
  smallTitle?: string;
  text?: string;
  children?: ReactNode;
  sx?: SxProps;
}

export const CardBase = ({
  largeTitle,
  smallTitle,
  text,
  sx,
  children,
}: IProps) => {
  const minCardHeight = 200;

  return (
    <Grid
      item
      sx={{
        width: {
          sm: "50%",
          md: "33.3%",
          lg: "25%",
        },
        minHeight: minCardHeight,
        ...sx,
      }}
    >
      <Card sx={{ height: "inherit" }}>
        <Skeleton variant="rectangular" height={150} />
        <CardContent>
          <Typography variant="h5" fontWeight={600} component="div">
            {largeTitle}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600} component="div">
            {smallTitle}
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 1 }}>
            {text}
          </Typography>
        </CardContent>
        {children}
      </Card>
    </Grid>
  );
};

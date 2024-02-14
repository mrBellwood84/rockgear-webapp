import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { IBrand } from "../../models/brand/IBrand";
import { useAppSelector } from "../../lib/state/hooks";
import { getLocaleText } from "../../lib/locale/getTextLocale";

interface IProps {
  brand: IBrand;
}

export const BrandCard = ({ brand }: IProps) => {
  const cardImageHeight = 150;

  const currentLang = useAppSelector(
    (state) => state.settings.languageSelected
  );
  const userRole = useAppSelector((state) => state.user.userRole);

  return (
    <Grid
      item
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
          md: "33.3%",
          lg: "25%",
        },
      }}
    >
      <Card>
        <Skeleton variant="rectangular" height={cardImageHeight}></Skeleton>
        <CardContent>
          <Typography variant="h6" component="div">
            {brand.name}
          </Typography>
          <Typography variant="body2" component="div">
            {getLocaleText(currentLang, brand.comment)}
          </Typography>
        </CardContent>
        {userRole === "admin" && (
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button variant="text" color="primary">
              Edit
            </Button>
            <Button color="error">Delete</Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

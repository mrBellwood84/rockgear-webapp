import {
  Box,
  CircularProgress,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface IProps {
  primary: string;
}

export const ListItemLoader = ({ primary }: IProps) => {
  return (
    <ListItem divider sx={{ display: { xs: "none", sm: "flex" } }}>
      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: "1.25rem",
              textDecorationLine: "line-through",
              fontStyle: "italic",
            }}
          >
            {primary}
          </Typography>
        }
        secondary="Deleting"
      />
      <Box sx={{ width: "auto" }}>
        <CircularProgress
          color="secondary"
          thickness={5}
          variant="indeterminate"
          sx={{ mr: 3 }}
        />
      </Box>
    </ListItem>
  );
};

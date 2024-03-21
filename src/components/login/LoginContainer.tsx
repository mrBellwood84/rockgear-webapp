import { Container } from "@mui/material";
import { QuickLogin } from "./QuickLogin";
import { LoginForm } from "./LoginForm";

export const LoginContainer = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateRow: "auto",
        gridTemplateColumns: "auto auto",
      }}
    >
      <QuickLogin />
      <LoginForm />
    </Container>
  );
};

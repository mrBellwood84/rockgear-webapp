"use client";

import { useAuthApiAgent } from "@/lib/apiAgent/authAgent";
import { useClientSideCookie } from "@/lib/cookie/clientSideCookies";
import { ILoginRequestDTO } from "@/lib/models/account/ILoginRequestDTO";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Router from "next/router";

const loginRequests: ILoginRequestDTO[] = [
  {
    username: "user1",
    password: "Password1",
  },
  {
    username: "user2",
    password: "Password2",
  },
  {
    username: "admin",
    password: "AdminPassword1",
  },
];

interface ILoginButtonProps {
  dto: ILoginRequestDTO;
}

const LoginListButton = ({ dto }: ILoginButtonProps) => {
  const { login } = useAuthApiAgent();
  const { setLogin, getRole, getToken } = useClientSideCookie();

  const clickAction = async () => {
    const loginResult = await login(dto);
    if (loginResult.success) {
      setLogin(loginResult.body!);
      location.reload();
    }
  };
  return (
    <ListItemButton onClick={() => clickAction()}>
      <ListItemText
        primary={dto.username.toUpperCase()}
        primaryTypographyProps={{ fontWeight: 600, textAlign: "center" }}
      />
    </ListItemButton>
  );
};

export const QuickLogin = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <List sx={{ width: "max-content", minWidth: 300 }}>
        <ListItem>
          <ListItemText
            primary="DEV :: Quick Login"
            primaryTypographyProps={{ textAlign: "center" }}
          />
        </ListItem>
        <Divider />
        {loginRequests.map((x) => (
          <LoginListButton key={x.username} dto={x} />
        ))}
      </List>
    </Box>
  );
};

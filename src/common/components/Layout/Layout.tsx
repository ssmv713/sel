import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import { Appbar } from "../Appbar";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack css={st.root}>
      <Appbar />
      <Stack direction="row" width="100%" height="100%">
        <main css={st.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const st = {
  root: css`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  `,
  main: css`
    width: 100%;
    height: 100%;
  `,
};

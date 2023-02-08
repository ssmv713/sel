import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/assets/helppopup/main/logo.png";
import { BottomBar } from "../../components";
import { Graph, SearchForHelp, SendMessage } from "./components";
import { Typography } from "@mui/material";

export const MainView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.blueBg}></div>
      <div css={sx.inner}>
        <Image src={logo} alt="logo" width={32} height={32} />
        <div css={sx.titleWrap}>
          <Typography
            variant="h4"
            fontSize={"32px"}
            color="white"
            sx={{ opacity: "0.7" }}
          >
            {"Hello there"}
          </Typography>
          <Typography variant="h4" fontSize={"32px"} color="white">
            {"How can we help?"}
          </Typography>
        </div>
        <SendMessage />
        <SearchForHelp />
        <Graph />
      </div>
      <BottomBar />
    </div>
  );
};

const sx = {
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    padding: 28px 16px;
    overflow: hidden;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
    font-size: 14px;
  `,
  titleWrap: css`
    margin-top: 76px;
    margin-bottom: 16px;
  `,
  inner: css`
    position: relative;
  `,
  blueBg: css`
    width: 100%;
    height: 388px;
    background: linear-gradient(
      117.67deg,
      #3f6193 0%,
      #5b8dd7 50%,
      #cbddf0 100%
    );
    position: absolute;
    left: 0;
    top: 0;
  `,
};
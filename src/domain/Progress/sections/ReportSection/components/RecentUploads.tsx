import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
export const RecentUploads = () => {
  const models = [
    {
      image: "assets/progress/report/video-ic.png",
      title: "Video",
      text: "Day One Progress Report",
    },
    {
      image: "assets/progress/report/video-ic.png",
      title: "Video",
      text: "Day One Progress Report",
    },
    {
      image: "assets/progress/report/video-ic.png",
      title: "Video",
      text: "Day One Progress Report",
    },
    {
      image: "assets/progress/report/video-ic.png",
      title: "Video",
      text: "Day One Progress Report",
    },
  ];
  return (
    <div>
      <Typography css={sx.title}>Recent Uploads</Typography>
      <div>
        {models.map((it, index) => (
          <div css={sx.box} key={index}>
            <Image src={it.image} alt="icon" width={38} height={38} />
            <div>
              <Typography css={sx.subTitle}>{it.title}</Typography>
              <Typography css={sx.text}>{it.text}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Typography css={sx.archive}> View Student Archive {">"}</Typography>
      </div>
    </div>
  );
};

const sx = {
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
  box: css`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 35.5px;
    cursor: pointer;
  `,
  subTitle: css`
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
  `,
  text: css`
    font-size: 16px;
    line-height: 21px;
  `,
  archive: css`
    color: #147ad6;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
  `,
};

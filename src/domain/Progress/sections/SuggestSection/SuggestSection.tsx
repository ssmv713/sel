import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
export const SuggestSection = () => {
  const models = [
    {
      image: "/assets/progress/report/suggest.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      text: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
    {
      image: "/assets/progress/report/suggest.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      text: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
    {
      image: "/assets/progress/report/suggest.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      text: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
  ];

  return (
    <div css={sx.root}>
      <Typography css={sx.title}>Suggested Courses</Typography>
      <div css={sx.cardContainer}>
        {models.map((it, index) => (
          <div key={index}>
            <Image src={it.image} alt="image" width={395} height={242} />
            <div css={sx.textBox}>
              <Typography css={sx.subTitle}>{it.title}</Typography>
              <div css={sx.text}>{it.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div css={sx.btnWrap}>
        <button css={sx.viewBtn}>Veiw all</button>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    background: #617391;
    padding: 43px 65px 58px 65px;
  `,
  title: css`
    color: #fff;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 32px;
  `,
  cardContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  textBox: css`
    width: 395px;
    height: 242px;
    padding: 22px 28px 41px 28px;
    border-radius: 0 0 28px 28px;
    background: #fff;
  `,

  subTitle: css`
    color: #617391;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 5px;
  `,
  text: css`
    font-size: 14px;
    line-height: 20px;
    color: #94a3b8;
  `,
  viewBtn: css`
    width: 264px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6394c7;
    background-color: #fff;
    border: none;
  `,
  btnWrap: css`
    margin-top: 42px;
    width: 100%;
    justify-content: center;
    display: flex;
  `,
};

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import { Colors } from "@/common/themes/Color";
import { useCourseDetailItem } from "./useCourseDetailItem";
import { CourseDetailType } from "../../../../../types/course.type";

type DetailCourseItemType = {
  item: CourseDetailType;
  onItemClick: () => void;
  isSelected: boolean;
};

export const DetailCourseItem = ({
  item,
  onItemClick,
  isSelected,
}: DetailCourseItemType) => {
  const { getCompletionIcon, getCourseTypeIcon } = useCourseDetailItem();

  return (
    <Stack
      onClick={onItemClick}
      direction="row"
      css={sx.courseDetailItem(isSelected)}
    >
      <Image
        width={20}
        height={30}
        src={getCompletionIcon(item.isCompleted)}
        alt="icon"
      />
      <Typography
        variant="body2"
        width="362px"
        lineHeight={"21px"}
        ml={"20px"}
        mr={"20px"}
        css={sx.text}
      >
        {item.title}
      </Typography>
      <Image
        width={30}
        height={30}
        src={getCourseTypeIcon(item.title)}
        alt="media"
      />
    </Stack>
  );
};

const sx = {
  courseDetailItem: (isSelected: boolean) => css`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 17.32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    background-color: ${isSelected && " rgba(103, 135, 183, 0.2)"};
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      background-color: rgba(103, 135, 183, 0.2);
    }
  `,
  text: css`
    color: #0a0b26;
    font-weight: 500;
    letter-spacing: 0.02em;
  `,
};

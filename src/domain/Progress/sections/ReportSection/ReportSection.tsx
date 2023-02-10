import { css } from "@emotion/react";
import { useState } from "react";
import { ProgressReports, RecentUploads, StudentWorkbook } from "./components";

export const ReportSection = () => {
  return (
    <div css={sx.root}>
      <div>
        <ProgressReports />
        <RecentUploads />
      </div>
      <StudentWorkbook />
    </div>
  );
};

const sx = {
  root: css`
    padding: 35px 65px 86px 65px;
    display: flex;
    justify-content: space-between;
  `,
};

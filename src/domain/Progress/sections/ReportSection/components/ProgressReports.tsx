import { Box, Dialog, Drawer, Menu, Popover, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import report from "@/assets/progress/report/report.png";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import progressPopup from "@/assets/progress/report/progressPopup.png";
import cross from "@/assets/progress/report/cross.png";
export const ProgressReports = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div css={sx.root}>
      <Typography css={sx.title}>Progress Reports</Typography>
      <div css={sx.imageContainer}>
        <div onClick={handleOpen}>
          <Image src={report} alt="report" width={169} height={308} />
        </div>

        <div onClick={handleOpen}>
          <Image src={report} alt="report" width={169} height={308} />
        </div>
      </div>

      <Modal
        css={sx.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div onClick={handleClose} css={sx.btnWrap}>
            <Image src={cross} alt="exit" width={14} height={14} />
          </div>
          <div css={sx.imgWrap}>
            <Image src={progressPopup} alt="popup" width={960} height={600} />
          </div>
          <div css={sx.btnsWrap}>
            <button css={sx.saveBtn}>Save</button>
            <button css={sx.shareBtn}>Share</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const sx = {
  modal: css`
    .MuiBox-root {
      padding: 18px;
    }
    .MuiModal-backdrop {
      background: #fff;
      flex-direction: column;
    }
  `,
  btnWrap: css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 26px;
  `,
  imgWrap: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  btnsWrap: css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 26px;
    margin-top: 32px;
  `,
  saveBtn: css`
    color: rgba(103, 135, 183, 1);
    border: solid 1px rgba(103, 135, 183, 1);
    border-radius: 8px;
    width: 125px;
    height: 52px;
    background: #fff;
    cursor: pointer;
  `,
  shareBtn: css`
    background: rgba(98, 147, 198, 1);
    border-radius: 8px;
    color: white;
    width: 125px;
    height: 52px;
    border: none;
    cursor: pointer;
  `,
  root: css`
    margin-bottom: 60px;
  `,
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
  imageContainer: css`
    display: flex;
    gap: 43px;
  `,
};

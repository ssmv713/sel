import { css } from '@emotion/react';
import { Stack } from '@mui/system';

export const PhotoUpload = () => {
    return <Stack css={sx.sample}></Stack>;
};

const sx = {
    sample: css`
        height: 452px;
        position: relative;
        overflow: hidden;
    `,
};

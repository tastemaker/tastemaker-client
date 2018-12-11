
import { css } from 'styled-components';

import { em } from "polished";

// color palette
const tuna = "#303039";
const shaft = "#313030";
const white = "#ffffff";
const silver = "#bebebe";

export const colors = {
    tuna,
    white,
    silver,
    shaft
};

export const font = "proxima-nova, sans-serif";
export const fontSecondary = "minion-pro, serif";
export const fontTertiary = "futura-pt-bold, sans-serif";
export const fontFamilies = [font, fontSecondary, fontTertiary];

const secondaryButton = css`
    background-color: rgba(0,0,0,0.25);
    border-radius: 0;
    font-family: ${font};
    color: ${white};
    font-size: ${em("24px")};
    letter-spacing: ${em("1px")};
    padding: ${em("9px")} ${em("21px")};

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`;

const theme = {
    colors,
    font,
    fontFamilies,
    fontSecondary,
    secondaryButton
};

export default theme;


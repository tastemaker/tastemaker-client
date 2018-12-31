
import { css } from 'styled-components';

import { em } from "polished";

// color palette
const tuna = "#303039";
const shaft = "#313030";
const white = "#ffffff";
const gray = "#676767";
const silver = "#bebebe";

export const colors = {
    tuna,
    gray,
    white,
    silver,
    shaft
};

export const font = "proxima-nova, sans-serif";
export const fontSecondary = "minion-pro, serif";
export const fontTertiary = "futura-pt-bold, sans-serif";
export const fontFamilies = [font, fontSecondary, fontTertiary];

export const rail = "6.77vw";

const secondaryButton = css`
    background-color: rgba(0,0,0,0.25);
    border-radius: 0;
    font-family: ${font};
    color: ${white};
    font-size: ${em("16px")};
    letter-spacing: ${em("1px")};
    padding: ${em("13px")} ${em("21px")};

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`;

const inputField = css`

    font-family: ${font};

    &:hover {
        border-color: white;
    }

    label {
        color: white;
    }

    >div {
        &:before {
            border-color: white !important;
            border-style: none none dashed none;
        }
        &:after {
            border-color: white;
        }
    }

    input {
        color: white;
        caret-color: white;
    }
`;

const theme = {
    colors,
    font,
    fontFamilies,
    fontSecondary,
    secondaryButton,
    inputField,
    rail
};

export default theme;


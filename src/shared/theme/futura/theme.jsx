
import { css } from 'styled-components';

import { em } from "polished";

// color palette
const tuna = "#303039";
const shaft = "#313030";
const white = "#ffffff";
const gray = "#676767";
const silver = "#bebebe";
const coral = "#ff6f61";

export const colors = {
    tuna,
    gray,
    white,
    silver,
    shaft,
    coral
};

// Fonts
export const font = "proxima-nova, sans-serif";
export const fontSecondary = "minion-pro, serif";
export const fontTertiary = "futura-pt-bold, sans-serif";
export const fontFamilies = [font, fontSecondary, fontTertiary];

// Links
export const secondaryLinkColor = coral;

// Spacing
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

        fieldset {
            border-color: white;
        }
    }

    label {
        color: white;
    }

    >div {
        color: white;

        &:hover {
            border-color: ${silver};

            fieldset {
                border-color: ${silver} !important;
            }
        }
        &:before {
            border-color: ${silver} !important;
            border-style: none none dashed none;
        }
        &:after {
            border-color: ${silver};
        }
    }

    fieldset {
        border-color: ${silver};
    }

    input {
        color: white;
        caret-color: white;
        font-family: ${font};

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active {

            color: white !important;
            -webkit-text-fill-color: white !important;
            -webkit-box-shadow: 0 0 0px 1000px ${shaft} inset !important;
        }
    }
`;

const theme = {
    colors,
    secondaryLinkColor,
    font,
    fontFamilies,
    fontSecondary,
    secondaryButton,
    inputField,
    rail
};

export default theme;


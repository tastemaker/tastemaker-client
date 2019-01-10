
import styled from 'styled-components';

import {
    color,
    space,
    fontStyle,
    fontSize
} from 'styled-system';

const Text = styled.p`
    ${fontStyle}
    ${fontSize}
    ${color}
    ${space}
`;

export const PrimaryText = styled(Text)`
    && { 
        font-family: ${props => props.theme.font};
    }
`;

export const SecondaryText = styled(Text)`
    && { 
        font-family: ${props => props.theme.fontSecondary};
    }
`;



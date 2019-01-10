
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    space,
    fontStyle,
    fontSize
} from 'styled-system';

const BaseLink = styled(Link)`
    ${fontStyle}
    ${fontSize}
    ${space}
`;

export const SecondaryLink = styled(BaseLink)`
    && { 
        font-family: inherit;
        color: ${props => props.theme.secondaryLinkColor};
    }
`;

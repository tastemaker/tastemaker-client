
import styled from 'styled-components';

import {
    alignItems,
    borders,
    bottom,
    color,
    display,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
    left,
    position,
    right,
    space,
    top,
    width
} from 'styled-system';

const Flex = styled.div`
    display: flex;
    ${alignItems}
    ${borders}
    ${bottom}
    ${color}
    ${display}
    ${flexDirection}
    ${flexWrap}
    ${height}
    ${justifyContent}
    ${left}
    ${position}
    ${right}
    ${space}
    ${top}
    ${width}
`;

export default Flex;

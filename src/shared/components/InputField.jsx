
import TextField from '@material-ui/core/TextField';
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
  width,
} from 'styled-system';

// The && syntax allows this style to take precedence over Material UI's defaults
const InputField = styled(TextField)`
    && {
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
        ${top}
        ${width}
        ${space}

        ${props => props.theme.inputField}
    }
`;

export default InputField;
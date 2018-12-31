
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// The && syntax allows this style to take precedence over Material UI's defaults
const SecondaryButton = styled(Button)`
    && { 
        ${props => props.theme.secondaryButton}
    }
`;

export default SecondaryButton;
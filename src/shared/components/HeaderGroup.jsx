
import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';


const Container = styled.hgroup`
    ${space}
    text-align: center;
    color: inherit;

    h2 {
        font-family: ${ props => props.theme.fontSecondary };
        font-size: 2.5vw;
        font-weight: 700;
        margin-bottom: 6.85vh;
    }

    h3 {
        width: 33.33vw;
        margin: 0 auto;
        font-size: 1.875vw;
        line-height: 2.5vw;
    }
`;

export default class HeaderGroup extends Component {

    render() {
        return (
            <Container {...this.props}>
                { this.props.children }
            </Container>
            );
    }
}
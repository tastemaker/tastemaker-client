
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'shared/header/Header';


const Container = styled.div`
    background-color: ${props => props.theme.colors.shaft};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
`;

export default class StartProject extends Component {

    render() {
        return (
            <Container>
                <Header key="main-header" light="true" />
                <p>Start Project</p>
            </Container>
            );
    }
}
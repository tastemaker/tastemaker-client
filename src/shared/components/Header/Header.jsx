
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from "polished";

import Logo from './Logo';


const Header = styled.header`
    height: 10.20vh;

    + section {
        padding-bottom: 10.20vh;
    }
`;

const LogoContainer = styled.div`
    top: 4.17vh;
    left: 50%;
    position: absolute;
    width: 184px;
    margin-left: -92px;

    svg {
        width: 184px;
        fill: ${props => (props.light) ? props.theme.colors.white : props.theme.colors.tuna};
        z-index: 1;
    }
`;

const Navigation = styled.nav`
    position: absolute;
    right: ${props => props.theme.rail};
    top: 4.17vh;
    z-index: 1;
`;

const NavigationLink = styled(Link)`
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${rem("12px")};
    color: ${props => (props.light) ? props.theme.colors.white : props.theme.colors.tuna};
    padding: ${rem("8px")} 0;
    margin: 0 ${rem("14px")};

    &:last-child {
        margin-right: 0;
    }

    &:after {
        content: "";
        height: 1px;
        left: 0;
        top: 90%;
        position: absolute;
        width: 100%;
        background-color: ${props => (props.light) ? props.theme.colors.white : props.theme.colors.tuna};
        transform: scaleX(0);
        transition: transform .3s cubic-bezier(.165,.84,.44,1);
    }

    &:hover { 
        color: ${props => (props.light) ? props.theme.colors.white : props.theme.colors.tuna};

        &:after {
            transform: scaleX(1);
        }
    }
`;

export default class App extends Component {

    render() {
        const { light } = this.props;
        return (
            <Header>
                <LogoContainer light={ light }>
                    <Link to="/">
                        <Logo />
                    </Link>
                </LogoContainer> 
                <Navigation>
                    <NavigationLink light={ light } to="/explore">Explore</NavigationLink>
                    <NavigationLink light={ light } to="/join">Become a Tastemaker</NavigationLink>
                    <NavigationLink light={ light } to="/login">Log In</NavigationLink>
                </Navigation>
            </Header>
            );
    }
}

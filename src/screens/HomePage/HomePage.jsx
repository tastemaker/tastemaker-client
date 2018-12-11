
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import Header from 'shared/header/Header';

import homeHero from './assets/home-hero.jpg';
import BritCoLogo from './assets/britco';
import DwellLogo from './assets/dwell';
import ApartmentTherapyLogo from './assets/apartmenttherapy';
import HgtvLogo from './assets/hgtv';
import RealSimpleLogo from './assets/realsimple';

import caHomeDesignLogo from './assets/cahome.png';


const Container = styled.article`
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${ props => props.backgroundImage }) no-repeat center center;
    background-size: cover;
`;

const PressModule = styled.section`
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 13.67vh;

    h4 {
        font-size: 2.25vh;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${props => props.theme.colors.silver};
    }
`;

const PressLinks = styled.ul`
    margin: 3.43vh auto 0;
    display: flex;
    align-items: center;
    max-width: 65%;
`;

const PressLink = styled.li`
    flex: 1;
    flex-basis: 0;
    flex-grow: 1;
    width: 16.67%;
    padding: 0.2em 0.5em;
    box-sizing: border-box;
    max-height: ${props => props.assetHeight || '28px'};

    svg {
        fill: ${props => props.theme.colors.silver};
        max-width: 100%;
        height: ${props => props.assetHeight || '28px'};

        path, polygon {
            fill: ${props => props.theme.colors.silver};
        }
    }

    img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        max-width: 100%;
        height: ${props => props.assetHeight || '28px'};
    }
`;

const HeaderGroup = styled.hgroup`
    text-align: center;
    color: ${ props => props.theme.colors.tuna }
    margin-top: 25.4vh;

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

const CTA = styled.div`
    text-align: center;
    margin-top: 6.85vh;
    font-size: 2.22vh;
`;

// The && syntax allows this style to take precedence over Material UI's defaults
const ThemedButton = styled(Button)`
    && { 
        ${props => props.theme.secondaryButton}
    }
`;

export default class HomePage extends Component {

    render() {
        return (
            <Container backgroundImage={ homeHero }>
                <Header key="main-header" />

                <HeaderGroup>
                    <h2>The best-kept secret in interior design</h2>
                    <h3>Tastemaker is an exclusive community of
                    top interior designers, vetted for quality,
                    ready to make your space everything
                    you imagine it could be.</h3>
                </HeaderGroup>

                <CTA>
                    <ThemedButton component={ Link } to="/project/start">Meet Your Designer</ThemedButton>
                </CTA>

                <PressModule>
                    <h4>Featured On</h4>

                    <PressLinks>
                        <PressLink><HgtvLogo /></PressLink>
                        <PressLink><DwellLogo /></PressLink>
                        <PressLink><RealSimpleLogo /></PressLink>
                        <PressLink><img alt="" style={ {filter: "invert(100%)"} } src={caHomeDesignLogo} /></PressLink>
                        <PressLink><ApartmentTherapyLogo /></PressLink>
                        <PressLink><BritCoLogo /></PressLink>
                    </PressLinks>
                </PressModule>
            </Container>
            );
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from 'shared/components/Header';
import HeaderGroup from 'shared/components/HeaderGroup';
import SecondaryButton from 'shared/components/SecondaryButton';

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
    color: ${ props => props.theme.colors.tuna };
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

const CTA = styled.div`
    text-align: center;
    margin-top: 6.85vh;
    font-size: 2.22vh;
`;



export default class HomePage extends Component {

    render() {
        return (
            <Container backgroundImage={ homeHero }>
                <Header key="main-header" />

                <HeaderGroup mt={"15.2vh"}>
                    <h2>The best-kept secret in interior design</h2>
                    <h3>Tastemaker is an exclusive community of
                    top interior designers, vetted for quality,
                    ready to make your space everything
                    you imagine it could be.</h3>
                </HeaderGroup>

                <CTA>
                    <SecondaryButton component={ Link } to="/designers">Meet The Designers</SecondaryButton>
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
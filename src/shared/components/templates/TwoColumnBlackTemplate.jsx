
import React from 'react';
import { rem } from "polished";
import styled from 'styled-components';

import Flex from 'shared/components/Flex';
import Header from 'shared/components/Header';
import HeaderGroup from 'shared/components/HeaderGroup';


const Container = styled.article`
    background-color: ${props => props.theme.colors.shaft};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    color: ${ props => props.theme.colors.white };
`;

const Grid = styled(Flex)`
    margin: 0 ${ props => props.theme.rail };
`;

const Column = styled.div`
    flex: 1;
`;

const GuidanceModule = styled.div`
    background-color: rgba(255,255,255,0.1);
    border: 1px solid ${props => props.theme.colors.gray};
    padding: ${rem("49px")} ${rem("78px")};

    h4 {
        font-size: 24px;
        font-weight: 700;
    }

    ul {
        margin-top: ${rem("24px")};
        list-style-type: circle;

        li {
            margin: ${rem("12px")} 0;
            line-height: 125%;
        }
    }
`;

const TwoColumnBlackTemplate = (props) => {
    return (
        <Container>
            <Header key="main-header" light="true" />

            <section>
                <HeaderGroup>
                    <h2>{ props.cta }</h2>
                </HeaderGroup>

                <Grid flexDirection="row" justifyContent="space-between">
                    <Column>
                        { props.children }
                    </Column>
                    <Column>
                        <GuidanceModule>
                            <h4>{ props.guidanceText }</h4>
                            <ul>
                                {
                                    props.guidancePoints.map((point, idx) => <li key={ `l${idx}` }>{point}</li>)
                                }
                            </ul>
                        </GuidanceModule>
                    </Column>
                </Grid>
            </section>
        </Container>
        );
};

export default TwoColumnBlackTemplate;

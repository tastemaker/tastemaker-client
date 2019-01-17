
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rem } from "polished";

import { registerUser } from 'shared/state/actions/user';

import Header from 'shared/components/Header';
import HeaderGroup from 'shared/components/HeaderGroup';
import Flex from 'shared/components/Flex';


const Container = styled.article`
    background-color: ${props => props.theme.colors.shaft};
    position: absolute;
    overflow: scroll;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    color: ${ props => props.theme.colors.white };
`;

const Grid = styled(Flex)`
    margin: 0 ${ props => props.theme.rail };
`;

const Column = styled.div`
    flex: 1;
`;

const InputForm = styled.form`
    padding: ${rem("49px")} ${rem("78px")};

    h4 {
        margin-bottom: 37px;
    }
`;

class StartProject extends Component {

    state = {
        email: ""
    };

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        const { registerUser } = this.props;
        event.preventDefault();
        registerUser({email: this.state.email});
    }

    render() {
        return (
            <Container>
                <Header key="main-header" light="true" />

                <section>
                    <HeaderGroup>
                        <h2>Thank you for signing up!<br/>We&rsquo;ll let you know once the site is ready to explore.</h2>
                    </HeaderGroup>

                    <Grid flexDirection="row" justifyContent="space-between">
                        <Column style={ {display: "none"} }>
                            <InputForm onSubmit={ (event) => this.handleSubmit(event) }>
                                <h4>Start Project</h4>

                            </InputForm>
                        </Column>
                        <Column style={ {display: "none"} }>
                            <p>Designers</p>
                        </Column>
                        <Column style={ {display: "none"} }>
                            <p>Designers</p>
                        </Column>
                    </Grid>
                </section>
            </Container>
            );
    }
}

const mapStateToProps = state =>({
    userSignupErrors: state.user.userSignupErrors
});
const mapDispatchToProps = dispatch =>({
    registerUser: (userProps) => dispatch(registerUser(userProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartProject);

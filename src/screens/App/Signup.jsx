
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rem } from "polished";

import { registerUser } from 'shared/state/actions/user';

import Header from 'shared/components/Header';
import HeaderGroup from 'shared/components/HeaderGroup';
import Flex from 'shared/components/Flex';
import SecondaryButton from 'shared/components/SecondaryButton';
import InputField from 'shared/components/InputField';


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

const InputForm = styled.form`
    padding: ${rem("49px")} ${rem("78px")};

    h4 {
        margin-bottom: 37px;
    }
`;

const Navigation = styled.div`
    margin-top: 37px;
`;

class Login extends Component {

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
        const { userSignupErrors } = this.props;

        const isSignupError = (userSignupErrors.email && 0 <= userSignupErrors.email.length);
        
        return (
            <Container>
                <Header key="main-header" light="true" />

                <section>
                    <HeaderGroup>
                        <h2>Join our community of interior design lovers.</h2>
                    </HeaderGroup>

                    <Grid flexDirection="row" justifyContent="space-between">
                        <Column>
                            <InputForm onSubmit={ (event) => this.handleSubmit(event) }>
                                <h4>Enter your email address</h4>

                                <InputField 
                                    value={ this.state.email }
                                    onChange={ (event) => this.updateEmail(event) } 
                                    id="email" 
                                    type="email" 
                                    label="Email"
                                    helperText={ (isSignupError) ? userSignupErrors.email : "" }
                                    required={true}
                                    error={ isSignupError }
                                    variant="outlined"
                                    fullWidth={true}
                                    mb={"2.5vh"} />

                                <div className="g-recaptcha" data-theme="dark" data-sitekey="6Lfj94EUAAAAAGYzGbGlSa7PmKE3uBDLnmv6I6FJ"></div>

                                <Navigation>
                                    <SecondaryButton type="submit">
                                        Submit
                                    </SecondaryButton>
                                </Navigation>

                            </InputForm>
                        </Column>
                        <Column>
                            <GuidanceModule>
                                <h4>Our Pledge</h4>
                                <ul>
                                    <li>Meet talented designers on our platform and explore their portfolios.</li>
                                    <li>Our service is free and has no hidden costs.</li>
                                    <li>No marketing.  We won’t email you about anything other than your project.</li>
                                    <li>No selling of your data or sharing it without your explicit permission.</li>
                                </ul>
                            </GuidanceModule>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

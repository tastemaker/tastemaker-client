
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rem } from "polished";

import { loginUser } from 'shared/state/actions/user';
import SecondaryButton from 'shared/components/SecondaryButton';
import InputField from 'shared/components/InputField';
import { SecondaryText } from 'shared/components/Text';
import { SecondaryLink } from 'shared/components/Link';
import TwoColumnBlackTemplate from 'shared/components/templates/TwoColumnBlackTemplate';


const InputForm = styled.form`
    padding: ${rem("49px")} ${rem("78px")};

    h4 {
        margin-bottom: 37px;
    }
`;

const Actions = styled.div`
    margin-top: 37px;
`;

class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        const { loginUser } = this.props;
        event.preventDefault();
        loginUser({email: this.state.email, password: this.state.password});
    }

    render() {
        const { userAuthErrors } = this.props;

        const hasAuthError = Object.keys(userAuthErrors).length > 0;
        
        return (
            <TwoColumnBlackTemplate 
                cta="Welcome back!"
                guidanceText="Our Pledge"
                guidancePoints={
                    [
                        "Meet talented designers on our platform and explore their portfolios.",
                        "Our service is free and has no hidden costs.",
                        "No marketing.  We won’t email you about anything other than your project.",
                        "No selling of your data or sharing it without your explicit permission."
                    ]
                }>

                <InputForm onSubmit={ (event) => this.handleSubmit(event) }>
                    <h4>Enter your email address and password</h4>

                    <InputField 
                        value={ this.state.email }
                        onChange={ (event) => this.updateEmail(event) } 
                        id="email" 
                        type="email" 
                        label="Email"
                        helperText={ (hasAuthError) ? userAuthErrors.detail.email : "" }
                        required={true}
                        error={ hasAuthError }
                        variant="outlined"
                        fullWidth={true}
                        mb={"2.5vh"} />

                    <InputField 
                        value={ this.state.password }
                        onChange={ (event) => this.updatePassword(event) } 
                        id="password" 
                        type="password" 
                        label="Password"
                        helperText={ (hasAuthError) ? userAuthErrors.detail.password : "" }
                        required={true}
                        error={ hasAuthError }
                        variant="outlined"
                        fullWidth={true}
                        mb={"2.5vh"} />

                    <SecondaryText fontStyle="italic" mb="3.5vh" fontSize="80%">
                        Looking to join?  Create a new account <SecondaryLink to="/signup">here</SecondaryLink>.
                    </SecondaryText>

                    <div className="g-recaptcha" data-theme="dark" data-sitekey="6Lfj94EUAAAAAGYzGbGlSa7PmKE3uBDLnmv6I6FJ"></div>

                    <Actions>
                        <SecondaryButton type="submit">
                            Submit
                        </SecondaryButton>
                    </Actions>

                </InputForm>
            </TwoColumnBlackTemplate>
            );
    }
}

const mapStateToProps = state =>({
    userAuthErrors: state.user.userAuthErrors
});
const mapDispatchToProps = dispatch =>({
    registerUser: (userProps) => dispatch(loginUser(userProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

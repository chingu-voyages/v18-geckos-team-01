import React, { useState, Fragment } from 'react';
import CreateAccount from './CreateAccount';
import SignIn from './SignIn';

const SignInAndCreateAccount = (props) => {
  const [showCreateAccountModal, setCreateAccountModal] = useState(false);

  const onSignInLinkClickedHandler = () => {
    setCreateAccountModal(false);
  };

  const onCreateClickedHandler = () => {
    setCreateAccountModal(true);
  };

  const onSignInSuccessHandler = (jwt) => {
    props.onSignInSuccess(jwt);
  };

  return (
    <Fragment>
      {showCreateAccountModal ? (
        <CreateAccount
          onSignInLinkClickedHandler={onSignInLinkClickedHandler}
        />
      ) : (
        <SignIn onCreateClickedHandler={onCreateClickedHandler} onSignInSuccess={onSignInSuccessHandler} />
      )}
    </Fragment>
  );
};

export default SignInAndCreateAccount;

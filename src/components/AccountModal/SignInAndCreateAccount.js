import React, { useState, Fragment } from 'react';
import CreateAccount from './CreateAccount';
import SignIn from './SignIn';

const SignInAndCreateAccount = () => {
  const [showCreateAccountModal, setCreateAccountModal] = useState(false);

  const onSignInLinkClickedHandler = () => {
    setCreateAccountModal(false);
  };

  const onCreateClickedHandler = () => {
    setCreateAccountModal(true);
  };

  return (
    <Fragment>
      {showCreateAccountModal ? (
        <CreateAccount
          onSignInLinkClickedHandler={onSignInLinkClickedHandler}
        />
      ) : (
        <SignIn onCreateClickedHandler={onCreateClickedHandler} />
      )}
    </Fragment>
  );
};

export default SignInAndCreateAccount;

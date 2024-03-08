import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuth, signStatus } from '../store/auth/authSlice';
import Preloader from '../ui/elements/Preloader/Preloader';

interface withAuthProps {
  children: JSX.Element;
  isRequred?: boolean;
}

const WithAuthPending: FC<withAuthProps> = ({ children, isRequred = true }) => {
  const isLogged = useSelector(isAuth);
  const signInStatus = useSelector(signStatus);

  if (signInStatus === 'pending') {
    return <Preloader width={40} />;
  }

  if (!isRequred && (signInStatus === 'success' || signInStatus === 'none')) {
    return children;
  }

  if (isLogged && signInStatus === 'success') {
    return children;
  }

  return <Navigate to={'/signIn'} replace={true} />;
};

export default WithAuthPending;

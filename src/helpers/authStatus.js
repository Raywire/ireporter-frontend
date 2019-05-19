import authUser from './authUser';

const authStatus = () => {
  const auth = authUser();
  if (auth && auth.token) {
    return true;
  }
  return false;
};

export default authStatus;

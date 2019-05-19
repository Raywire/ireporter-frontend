import authUser from './authUser';

const authHeader = () => {
  const auth = authUser();

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': auth.token,
  }

  if (auth && auth.token) {
    return headers;
  }
  return {};
};

export default authHeader;

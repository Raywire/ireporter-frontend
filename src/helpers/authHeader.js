import authUser from './authUser';

const authHeader = () => {
  const auth = authUser();

  if (auth && auth.token) {
    return { Authorization: `Bearer ${auth.token}` };
  }
  return {};
};

export default authHeader;

import authUser from './authUser';

const isOwner = (author) => {
  const auth = authUser();
  if (auth.user.username === author) {
    return true;
  }
  return false;
};

export default isOwner;

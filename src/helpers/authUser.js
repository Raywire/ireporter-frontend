const authUser = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth && auth.token) {
      return auth;
    }
    return false;
  };
  
  export default authUser;
  
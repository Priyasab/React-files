class Authentication {
  setLoggedUser(username) {
    sessionStorage.setItem("authenticatedUser", username);
  }
  getLoggedUser() {
    let username = sessionStorage.getItem("authenticatedUser");
    return username;
  }
  removeUser() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = this.getLoggedUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
export default new Authentication();

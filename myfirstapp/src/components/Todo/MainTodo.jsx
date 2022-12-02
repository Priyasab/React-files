import Content from "./Content";
import Error from "./Error";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from "./withNavigation";
import withParam from "./withParam";
import Header from "./Header";
import Logout from "./Logout";
import Footer from "./Footer";
import AuthenticatedRoute from "./AuthenticatedRoute";
function MainTodo() {
  const LoginWithNavigation = withNavigation(Login);
  const WelcomeWithParam = withParam(Welcome);
  const ContentWithNavigation = withNavigation(Content);
  const ErrorWithNavigation = withNavigation(Error);
  const HeaderWithNavigation = withNavigation(Header);
  return (
    <div className="MainTodo">
      <Router>
        <HeaderWithNavigation />
        <Routes>
          <Route path="/" element={<LoginWithNavigation />}></Route>
          <Route path="/login" element={<LoginWithNavigation />}></Route>
          <Route
            path="/welcome/:name"
            element={
              <AuthenticatedRoute>
                <WelcomeWithParam />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route
            path="/content"
            element={
              <AuthenticatedRoute>
                <ContentWithNavigation />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="*"
            element={
              <AuthenticatedRoute>
                <ErrorWithNavigation />
              </AuthenticatedRoute>
            }
          ></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default MainTodo;

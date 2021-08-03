// React Router
import { Route, Switch, Redirect } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// custom css/scss
import "./index.scss";
// Responsive css/scss
import "./Responsive.scss";
// All Components / Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import ContactForm from "./components/ContactForm";
// import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={ContactForm} />
        {/* <Route exact component={Error} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

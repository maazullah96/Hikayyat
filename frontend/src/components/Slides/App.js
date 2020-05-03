import React from "react";
import "./App.scss";

import "./Themes/robotlung.css";
import "./Themes/colorBrewer.min.css";
import "./Themes/paper.css";

import Deck from "./Components/RevealComponents/Deck";
import Slides from "./Slides";
import "./index.css";
import NavHeader from "./NavHeader";
import { useState } from "react";
import Excrept from "./Slides/Excrept";
import FirstSlide from "./Slides/FirstSlide";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// Setup the slide theme
// import 'reveal.js/css/theme/solarized.css';

function App(props) {
  const [showNav, setshowNav] = useState(false);

  // state = { showNav: false };
  // toggleSideNav = action => {
  //   setshowNav(action);
  //   // this.setState({ showNav: action });
  // };
  console.log(props);
  console.log(props.match.params.id);
  let category = props.match.params.id;
  // console.log(category + "category");
  // alert(category);
  return (
    <div className="App">
      <NavHeader
        showNav={showNav}
        onHideNav={() => {
          setshowNav(false);
        }}
        onOpenNav={() => {
          setshowNav(true);
        }}
      />
      <Deck>
        <FirstSlide />
        {category !== undefined ? <Excrept category={category} /> : <Excrept />}
        {/* {Slides} */}
      </Deck>
    </div>
  );
}

export default App;

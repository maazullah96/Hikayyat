import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { checkLoggedIn } from "./util/session";

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);
  window.state = store.getState;

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

(async () => renderApp(await checkLoggedIn()))();

// import React from "react";
// import Reveal from "reveal";
// import "reveal/index.css";
// import "reveal/theme/night.css";

// class Slides extends React.Component {
//   componentDidMount() {
//     Reveal.initialize({});
//     //   hljs.initHighlightingOnLoad()
//   }
//   render() {
//     return (
//       <>
//         <div className="reveal">
//           <div className="slides">{this.props.children}</div>
//         </div>
//       </>
//     );
//   }
// }

// const slide = (title, codeExample, test) => {
//   class Slide extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleTestClick = this.handleTestClick.bind(this);
//     }
//     handleTestClick() {
//       test();
//     }
//     render() {
//       return (
//         <section>
//           <h2>{title}</h2>
//           <pre>
//             <code className="js">{codeExample}</code>
//           </pre>
//           <div>
//             <button type="button" onClick={this.handleTestClick}>
//               Execute
//             </button>
//           </div>
//         </section>
//       );
//     }
//   }

//   return Slide;
// };

// function helloWorld() {
//   return "hello world";
// }

// const test = function() {
//   alert(helloWorld());
// };

// const example = `function helloWorld(){
//     return "hello world"
//   }

//   const message = helloWorld()

//   assert.that(message, "hello world")`;

// const HelloWorldSlide = slide("Hello World", example, test);

// const higherOrderComponent = WrappedComponent => {
//   class HOC extends React.Component {
//     render() {
//       return (
//         <Slides>
//           <WrappedComponent />
//         </Slides>
//       );
//     }
//   }

//   return HOC;
// };

// //   const WrappedComponent = withSecretToLife(DisplayTheSecret);

// const application = document.getElementById("boot");
// ReactDOM.render(
//   <Slides>
//     <HelloWorldSlide />
//   </Slides>,
//   application
// );

// export default higherOrderComponent(HelloWorldSlide);

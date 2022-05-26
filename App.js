
import React from "react";
import { Route } from "react-router-dom";

import Main from "./Main";
import Review from "./Review";




function App() {
  // const [s, setS] = React.useState();
  // console.log("in app", s);
  // React.useEffect(() => {
  //  console.log("a did?");
  // }, [s]);

  return (
    <div className = "App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
    </div>
  );
}

// function tick() {
//   ReactDOM.render(
//     <App date={new Date()} />,
//     document.getElementById('root')
//   );
  
// // }

// setInterval(tick, 1000);

export default App;

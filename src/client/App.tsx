import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compose from "./pages/Compose";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

class App extends React.Component<IAppProps, IAppState> {
  // constructor(props: IAppProps) {
  // 	super(props);
  // 	this.state = {
  // 		name: ""
  // 	};
  // }

  // async componentDidMount() {
  // 	try {
  // 		let r = await fetch('/api/hello');
  // 		let name = await r.json();
  // 		this.setState({ name });
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/compose" component={Compose} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;

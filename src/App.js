import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

// All the components are immported here
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlog";
import AllContent from "./pages/AllContent";
import EditBlog from './pages/EditBlog';
import AddUser from './pages/AddUser';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          {/*this it the Navigtion bar - its a seperate Component at the top */}
          <Navigation/>          
          <Switch>
            {/*Route's-Path and Link's-to has to have same urls, so that they can coordinate and trigger the right component*/}
          <Route path="/users" component={AddUser}></Route>
          <Route path="/createblog" component={AddBlog}></Route>
          <Route path="/blogs" component={AllContent}></Route>
          {/*If there is url is carrying some value like ID, it has to be defined in the Route path after ":"*/}
          <Route path="/edit/:id" component={EditBlog}></Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

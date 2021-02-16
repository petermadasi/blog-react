import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlog";
import AllContent from "./pages/AllContent";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import axios from "axios";
import EditBlog from './pages/EditBlog';
import AddUser from './pages/AddUser';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navigation/>          
          <Switch>
          <Route path="/users" component={AddUser}></Route>
          <Route path="/createblog" component={AddBlog}></Route>
          <Route path="/blogs" component={AllContent}></Route>
          <Route path="/edit/:id" component={EditBlog}></Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

import Home from './Components/Home'
import Form from './Components/Form'
import wall from './images/pngegg.png';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Result from './Components/Result';
import DataState from './Context/Data/DataState';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import UserState from './Context/User/UserState';
import Login from './Components/Login';
import Data from './Components/Data';

const App = () => {
  return (
    <UserState>
      <DataState>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/form" element={<Form />} />
              <Route path="/result" element={<Result />} />
              <Route path="/reports" element={<Data />} />
            </Routes>
          </div>
        </Router>
      </DataState>
    </UserState>
  )
}

export default App
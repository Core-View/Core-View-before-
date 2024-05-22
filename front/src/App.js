import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Common/Header';
import Main from './Main/Main';
import Mypage from './My/Mypage';
import SignIn from './Sign/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="users">
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

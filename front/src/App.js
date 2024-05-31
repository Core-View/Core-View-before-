import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Common/header';
import Main from './Home/home_main';
import Mypage from './My/my_main';
import SignIn from './Sign/signin_main';
import PostView from './Post/post_view';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="post-view" element={<PostView />} />
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

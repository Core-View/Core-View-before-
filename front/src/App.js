import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// header 여서 안나왔는데 Header 로 고쳐서 나옵니다 이제
import Header from "./Common/Header";
import Main from "./Home/home_main";
import Mypage from "./My/my_main";
import SignIn from "./Sign/signin_main";
import Post from "./Post/post_main";
import Sidebar from "./Common/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar width={320} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="my_main" element={<Mypage />} />
          <Route path="post_main" element={<Post />} />
          <Route path="users">
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

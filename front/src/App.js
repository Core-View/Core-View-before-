import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// header 여서 안나왔는데 Header 로 고쳐서 나옵니다 이제
import Header from "./Common/Header";
import Main from "./Home/home_main";
import Mypage from "./My/my_main";
import SignIn from "./Sign/Sign_in/signin_main";
import SignUp from "./Sign/Sign_up/signup_main";
import Mymodify from "./My/my_modify";
import Post from "./Post/post_main";
import Sidebar from "./Common/Sidebar";
import CodeEditor from "./Post/post_code_editor";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="my_main" element={<Mypage />} />
          <Route path="my_modify" element={<Mymodify />} />
          <Route path="post_main" element={<Post />} />
          <Route path="post_code" element={<CodeEditor />} />
          <Route path="users">
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

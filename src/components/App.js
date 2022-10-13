import '../styles/App.scss';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Login from './Login';




function App() {
  return (
    <div>
      <body><Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
          </>}>
        </Route>
        <Route path="/login" element={
          <>
            <Header />
            <Login />
          </>
        }>
        </Route>
      </Routes>
      </body>
    </div>
  );
}

export default App;
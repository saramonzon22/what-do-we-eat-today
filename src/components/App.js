import '../styles/App.scss';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Main from './Main';




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
      </Routes>
      </body>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import SingIn from './SingIn';

// services

import singIn from '../services/singIn';
import ls from '../services/ls';
import router from '../services/router';




const App = () => {

  const [userId, setUserId] = useState(ls.get('userId'));
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // state: sign up
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  useEffect(() => {
    if (userId !== '') {
      singIn.getProfileFromApi(userId).then(response => {
        setUserName(response.name);
        setUserEmail(response.email);
        setUserPassword(response.password);
      });
    }
    ls.set('userId', userId || '');
  }, [userId]);

  const sendSingUpToApi = data => {
    // Limpiamos el error antes de enviar los datos al API
    setSignUpErrorMessage('');
    // Enviamos los datos al API
    singIn.sendSingUpToApi(data).then(response => {
      if (response.success === true) {
        setUserId(response.userId);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de signup al inicio de la página
        router.redirect('/');
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };


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
        <Route path="/signin" element={
          <>
            <SingIn signUpErrorMessage={signUpErrorMessage} sendSingUpToApi={sendSingUpToApi} />
          </>
        }></Route>
      </Routes>
      </body>
    </div>
  );
}

export default App;
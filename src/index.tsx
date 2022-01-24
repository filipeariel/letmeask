import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './services/firebase'

import './styles/global.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import { createContext } from 'react'

// import App from './App';

// import './services/firebase'

// import './styles/global.scss'

// export const TestContext = createContext('');

// const element = (
//   <BrowserRouter>
//     <TestContext.Provider value={'Teste'}>
//       <App />
//     </TestContext.Provider>
//   </BrowserRouter>
// );

// const container = document.getElementById('root');

// ReactDOM.render(element, container);
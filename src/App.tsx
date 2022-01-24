import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />

          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { createContext } from 'react';
// import { useRoutes } from 'react-router-dom';

// import { Home } from "./pages/Home";
// import { NewRoom } from "./pages/NewRoom";

// const App: React.FC = (): JSX.Element => {
//   const home = {
//     path: '/',
//     element: <Home />,
//   }

//   const newRoom = {
//     path: '/rooms/new',
//     element: <NewRoom />,
//   }

//   const routing = useRoutes([home, newRoom]);

//   return <>{routing}</>
// };

// export default App;
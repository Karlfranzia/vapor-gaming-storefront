import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <div className="container">
            <Routes>
              {/* Define routes to render different page components at different paths */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/Login" 
                element={<Login />} 
              />
              <Route 
                path="/SignUp" 
                element={<SignUp />} 
              />
              
            </Routes>
          </div>
         
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

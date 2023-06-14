import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Game from './pages/Game'
import Search from './pages/Search';
import Library from './pages/Library';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { setContext } from '@apollo/client/link/context';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                <Route
                  path="/Game/:slug"
                  element={<Game />}
                />
                <Route
                  path="/Search"
                  element={<Search />}
                />
                <Route
                  path="/Library"
                  element={<Library />}
                />
              </Routes>
            </div>
          </div>
        </Router>
      </ApolloProvider>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;

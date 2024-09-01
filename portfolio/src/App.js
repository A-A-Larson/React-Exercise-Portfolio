import { Box } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import DrawerAppBar from './components/DrawerAppBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Admin from './admin/Admin';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ProjectUpsert from './admin/ProjectUpsert';

const App = () => {

  return (
    <div>
      <DrawerAppBar />
      <Box component='main' >
        <Switch>
          <Route exact from='/' render={props => <Home {...props} />} />
          <Route exact from='/projects' render={props => <Projects {...props} />} />
          <Route exact from='/about' render={props => <About {...props} />} />
          <Route exact from='/admin' render={props => <Admin {...props} />} />
          <Route exact from="/project/create" render={props => <ProjectUpsert {...props} />} />
          <Route exact from="/project/edit/:id" render={props => <ProjectUpsert {...props} />} />
          <Route exact from="/project/delete/:id" render={props => <ProjectUpsert {...props} />} />    
          <Route from='*' render={props => <NotFound {...props} />} />
        </Switch>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
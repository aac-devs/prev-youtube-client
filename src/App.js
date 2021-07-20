import { BrowserRouter } from 'react-router-dom';
import Views from './components/content/Views';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Views />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

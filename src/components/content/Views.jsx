import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import DetailPage from '../../pages/DetailPage';
import HomePage from '../../pages/HomePage';

const Container = styled.header`
  flex-grow: 1;
`;

const Views = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/videos" />
        </Route>
        <Route path="/videos" exact>
          <HomePage />
        </Route>
        <Route path="/videos/:videoId">
          <DetailPage />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Container>
  );
};

export default Views;

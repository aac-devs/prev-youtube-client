import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 1;
`;

const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;

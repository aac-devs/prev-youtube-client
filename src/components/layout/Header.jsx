import styled from 'styled-components';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import PersonIcon from '@material-ui/icons/Person';
import SearchBar from './SearchBar';

const Container = styled.header`
  width: 100%;
  height: 64px;
  min-height: 64px;
  background-color: rgba(16, 32, 39, 0.9);
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'search login';

  @media (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-areas: 'search';
  }

  .search-side {
    grid-area: search;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .login-side {
    grid-area: login;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    p {
      color: #fff;
      margin-left: 5px;
    }
  }
`;

const Button = styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: transparent;
  color: #fff;
  margin: 0 20px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(16, 32, 39, 1);
    cursor: pointer;
  }
`;

const Header = () => {
  const matches = useMediaQuery('(max-width:960px)');
  return (
    <Container>
      <div className="search-side">
        <Button>
          <MenuIcon />
        </Button>
        <SearchBar />
      </div>
      {!matches && (
        <div className="login-side">
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <p>Dark mode</p>
          <Button>
            <PersonIcon />
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Header;

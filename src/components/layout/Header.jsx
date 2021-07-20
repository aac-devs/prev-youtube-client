import styled from 'styled-components';

import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

const Container = styled.header`
  width: 100%;
  height: 64px;
  min-height: 64px;
  background-color: rgba(28, 84, 118, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 10px #222;
  .left-side {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .right-side {
    height: 100%;
    display: flex;
    align-items: center;
    p {
      color: #fff;
      margin-left: 5px;
    }
  }
  .search-bar {
    height: 35px;
    display: flex;
    align-items: center;
    background-color: rgba(68, 124, 158, 1);
    padding: 0 10px;
    color: #fff;
    border-radius: 5px;
    margin-left: 10px;
    input {
      margin-left: 10px;
      border: none;
      background-color: transparent;
      color: #fff;
      outline: none;
      font-size: 16px;
    }
  }
  .login-button {
  }
`;

const BurguerButton = styled.button`
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
  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: rgba(28, 84, 118, 1);
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="left-side">
        <BurguerButton>
          <MenuIcon />
        </BurguerButton>
        <div className="search-bar">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="right-side">
        <Switch
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <p>Dark mode</p>
        <BurguerButton>
          <PersonIcon />
        </BurguerButton>
      </div>
    </Container>
  );
};

export default Header;

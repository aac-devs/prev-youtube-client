import styled from 'styled-components';

const Container = styled.button`
  width: 300px;
  min-width: 300px;
  height: 280px;
  max-height: 280px;
  background-color: #37474f;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #4c585f;
  }

  .image {
    height: 160px;
    min-height: 160px;
    width: 100%;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .body {
    padding: 6px;
    padding-top: 12px;
    width: 100%;
    color: #fff;
    text-align: left;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
  }
`;

const VideoItem = (props) => {
  return (
    <Container img={props.image} type="button">
      <div className="image" />
      <div className="body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Container>
  );
};

export default VideoItem;

import styled from 'styled-components';
import VideosList from '../components/videos/VideosList';
import mock from '../utils/mock-data.json';

const Container = styled.div`
  padding: 15px 10px;
`;

const HomePage = () => {
  const dummyDataList = mock.items;
  dummyDataList.shift();

  return (
    <Container>
      <VideosList videos={dummyDataList} />
    </Container>
  );
};

export default HomePage;

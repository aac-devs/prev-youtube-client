import styled from 'styled-components';
import VideoItem from './VideoItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 15px;
  justify-content: center;
`;

const VideosList = (props) => {
  return (
    <Container>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
        />
      ))}
    </Container>
  );
};

export default VideosList;

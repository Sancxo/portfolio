import styled from 'styled-components';
import HeroImg from '../Assets/Imgs/hero_img.JPG';

// Style
const Jumbotron = styled.div`
  background: center / cover no-repeat url(${HeroImg});
`
function Home() {
  return (
    <Jumbotron className="jumbotron">
      <h1>Welcome !</h1>
    </Jumbotron>
  );
}

export default Home;

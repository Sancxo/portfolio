import styled from 'styled-components';
//import './home.css';

// Style
const Jumbotron = styled.div`
  background: center no-repeat url('../../Imgs/hero_img.JPG');
  background-size: cover;
`
function Home() {
  return (
    <Jumbotron className="jumbotron">
      <h1>Welcome !</h1>
    </Jumbotron>
  );
}

export default Home;

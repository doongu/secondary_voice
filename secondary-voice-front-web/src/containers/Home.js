import styled from "styled-components";
// components
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Background>
        <Title>
          당신의 목소리는 <br />더 이상 하나가 아닙니다
        </Title>
        <Button>체험하기</Button>
        <Sound src="/images/sound.png" />
      </Background>
    </>
  );
};

const Background = styled.section`
  height: 500px;
  background: url("/images/main.png");
  background-size: cover;
  background-position: center;
  padding-top: 64px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: #efefef;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 64px;
`;

const Button = styled.button`
  display: block;
  height: 40px;
  box-sizing: border-box;
  padding: 4px 16px;
  border-radius: 48px;
  border: 1px solid white;
  font-size: 16px;
  margin: auto;
  color: white;
  text-align: center;
  transition: 0.2s ease;

  &:active {
    background-color: white;
    color: black;
  }
`;

const Sound = styled.img`
  width: 44px;
  height: 24px;
  display: block;
  margin: 64px auto;
`;

export default Home;

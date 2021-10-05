import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// components
import Home from "containers/Home";
import Upload from "containers/Upload";
import Example from "containers/Example";
import Footer from "containers/Footer";
import { newSnackbar } from "slices/snackbar";

const HomePage = () => {
  const dispatch = useDispatch();

  const onClick = () =>
    dispatch(newSnackbar({ type: "SUCCESS", message: "다운로드 완료" }));

  return (
    <>
      <Helmet>
        <title>2O</title>
      </Helmet>

      <Home />

      <Section>
        자신의 목소리를 원하는 목소리로 바꿔주는
        <br />
        <strong>
          <span>Voice Avatar</span> 서비스
        </strong>
      </Section>

      <Temp src="images/bounce.png" />

      <InfoWrapper>
        <Info>자신이 원하는 목소리로 자유롭게 의사소통</Info>
        <Info>유저의 목소리를 다양한 스타일로 변환</Info>
        <Info>실시간 End-To-End 음성 변환 솔루션</Info>
      </InfoWrapper>

      <Upload />

      <CircleButton onClick={onClick}>다운로드</CircleButton>

      <Example />

      <Footer />
    </>
  );
};

const Section = styled.section`
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 80px 0 32px 0;

  & > strong {
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin-top: 8px;

    & > span {
      font-size: 18px;
      font-weight: 700;
      color: #f477b0;
    }
  }
`;

const Temp = styled.img`
  display: block;
  width: 60px;
  margin: auto;
  margin-bottom: 32px;
  opacity: 0.8;
`;

const InfoWrapper = styled(Section)`
  padding-top: 0;
  padding-bottom: 24px;
`;

const Info = styled.p`
  font-size: 12px;
  color: white;
  font-weight: 200;
  text-align: center;

  & ~ & {
    margin-top: 16px;
  }
`;

const CircleButton = styled.button`
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

export default HomePage;

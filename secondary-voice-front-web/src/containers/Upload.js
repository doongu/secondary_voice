import styled from "styled-components";
import { useState, useRef } from "react";
import axios from "axios";
import SpinLoading from "components/common/Loading";

const Upload = () => {
  const [output, setOutput] = useState(null);
  const [temp, setTemp] = useState("a001");
  const data_single = useRef(null);
  const data_double_1 = useRef(null);
  const data_double_2 = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const playAudio = (input, id) => {
    input.onchange = function () {
      const sound = document.querySelector(`#${id}`);
      const reader = new FileReader();
      reader.onload = function (e) {
        sound.src = this.result;
        sound.controls = true;
      };

      if (id === "single") {
        data_single.current = this.files[0];
      } else if (id === "double_1") {
        data_double_1.current = this.files[0];
      } else if (id === "double_2") {
        data_double_2.current = this.files[0];
      }

      reader.readAsDataURL(this.files[0]);
    };
  };

  const uploadSingle = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.opacity = 0;
    input.style.width = "0px";
    input.style.height = "0px";
    playAudio(input, "single");
    document.body.append(input);
    input.click();
  };

  const uploadDouble_origin = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.opacity = 0;
    input.style.width = "0px";
    input.style.height = "0px";
    playAudio(input, "double_1");
    document.body.append(input);
    input.click();
  };

  const uploadDouble_target = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.opacity = 0;
    input.style.width = "0px";
    input.style.height = "0px";
    playAudio(input, "double_2");
    document.body.append(input);
    input.click();
  };

  const onTrans = () => {
    if (!data_single.current) {
      callDoubleData(data_double_1, data_double_2);
    } else {
      callSingleData(data_single);
    }
  };

  const callSingleData = (sound) => {
    const formData = new FormData();
    formData.append("voice", sound.current);
    setIsLoading(true);
    axios
      .post(`/conversion/single/${temp}`, formData)
      .then((res) => setOutput(res.data.result))
      .finally(() => setIsLoading(false));
  };

  const callDoubleData = (origin, target) => {
    const formData = new FormData();
    formData.append("voice1", origin.current);
    formData.append("voice2", target.current);
    setIsLoading(true);
    axios
      .post("/conversion/dual", formData)
      .then((res) => setOutput(res.data.result))
      .finally(() => setIsLoading(false));
  };

  const onClickType = (id) => setTemp(id);

  return (
    <>
      <Layout>
        <Title>REC</Title>
        <Description>나만의 목소리로 나의 개성을 뽐내세요</Description>
        <Block>
          <p>Single</p>
          <Inner>
            <audio id="single" controls>
              <source src="" type="audio/ogg" />
            </audio>
            <Button onClick={uploadSingle}>↥</Button>
          </Inner>
          <Slider>
            <ContentWrapper>
              <li onClick={() => onClickType("a001")}>
                <Item checked={temp === "a001"}>굵은 여성</Item>
              </li>
              <li onClick={() => onClickType("p112")}>
                <Item checked={temp === "p112"}>견자희</Item>
              </li>
              <li onClick={() => onClickType("p226")}>
                <Item checked={temp === "p226"}>중년 남성</Item>
              </li>
              <li onClick={() => onClickType("p234")}>
                <Item checked={temp === "p234"}>젊은 여성</Item>
              </li>
              <li onClick={() => onClickType("p237")}>
                <Item checked={temp === "p237"}>중후한 남성</Item>
              </li>
              <li onClick={() => onClickType("p345")}>
                <Item checked={temp === "p345"}>허스키한 남성</Item>
              </li>
              <li onClick={() => onClickType("p277")}>
                <Item checked={temp === "p277"}>어린 여성</Item>
              </li>
              <li onClick={() => onClickType("p286")}>
                <Item checked={temp === "p286"}>얇은 남성</Item>
              </li>
              <li onClick={() => onClickType("p300")}>
                <Item checked={temp === "p300"}>깐깐한 여성</Item>
              </li>
              <li onClick={() => onClickType("p306")}>
                <Item checked={temp === "p306"}>점잖은 여성</Item>
              </li>
              <li onClick={() => onClickType("p329")}>
                <Item checked={temp === "p329"}>조용한 여성</Item>
              </li>
              <li onClick={() => onClickType("p330")}>
                <Item checked={temp === "p330"}>보통 여성</Item>
              </li>
              <li onClick={() => onClickType("p361")}>
                <Item checked={temp === "p361"}>당당한 여성</Item>
              </li>
            </ContentWrapper>
          </Slider>
        </Block>

        <Block>
          <p>Origin / Target</p>
          <Inner>
            <audio id="double_1" controls>
              <source src="" type="audio/ogg" />
            </audio>
            <Button onClick={uploadDouble_origin}>↥</Button>
          </Inner>
          <br />
          <Inner>
            <audio id="double_2" controls>
              <source src="" type="audio/ogg" />
            </audio>
            <Button onClick={uploadDouble_target}>↥</Button>
          </Inner>
        </Block>
      </Layout>

      <CircleButton onClick={onTrans}>변환하기</CircleButton>

      <Layout>
        <Title>OUT</Title>
        <Description>새로운 목소리로 마음껏 표현하세요</Description>
        <Block>
          <Inner>
            <audio src={`${output}`} controls />
          </Inner>
        </Block>
      </Layout>

      {isLoading && (
        <LoadingBG>
          <SpinLoading />
        </LoadingBG>
      )}
    </>
  );
};

const Layout = styled.section`
  padding-top: 80px;
`;

const Title = styled.h1`
  position: relative;
  width: 32px;
  color: #efefef;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin: auto;
  margin-bottom: 4px;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    top: 2px;
    left: -6px;
    border-radius: 3px;
    background-color: red;
  }
`;

const Description = styled.p`
  color: #efefef;
  font-weight: 200;
  font-size: 16px;
  text-align: center;
  padding-bottom: 48px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 32px;
  padding-bottom: 64px;

  & > p {
    font-size: 14px;
    color: #eee;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  margin-left: 16px;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;

  &:active {
    background-color: white;
    color: black;
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

const Slider = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  position: relative;
  width: auto;
  margin-top: 16px;
  overflow: hidden;
`;

const ContentWrapper = styled.ul`
  overflow-x: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;

  & > li {
    list-style: none;

    & ~ * {
      margin-left: 16px;
    }
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ checked }) => (checked ? "#d14987" : "#888")};
  color: white;
`;

const LoadingBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
`;

export default Upload;

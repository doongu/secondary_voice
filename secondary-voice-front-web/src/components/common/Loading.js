import styled, { keyframes } from "styled-components";
// styles
import palette from "lib/styles/palette";

const SpinLoading = () => {
  return (
    <Loader>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
        <CirclePath cx="50" cy="50" r="20" />
      </Svg>
    </Loader>
  );
};

const Loader = styled.div`
  position: relative;
  margin: 0px auto;
  width: 36px;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const dashLoad = keyframes`
	0%{
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0;
	}
	50%{
		stroke-dasharray: 89,200;
		stroke-dashoffset: -35px;
	}
	100%{
		stroke-dasharray: 89,200;
		stroke-dashoffset: -124px;
	}
`;

const spin = keyframes`
	100% { transform: rotate(360deg); }
`;

const Svg = styled.svg`
  animation: ${spin} 1.6s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const CirclePath = styled.circle`
  stroke: ${palette.red4};
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  fill: none;
  animation: ${dashLoad} 1.2s ease-in-out infinite;
`;

export default SpinLoading;

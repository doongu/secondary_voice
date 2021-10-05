import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Layout>
        <p>
          <strong>2ECONDARY VOICE</strong>
          <span>Copyright 2021. NEW Inc. All Rights Reserved.</span>
        </p>
      </Layout>
    </>
  );
};

const Layout = styled.footer`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: calc(100% - 32px);
  height: 58px;
  padding: 32px 16px 48px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 50;

  & > p {
    color: silver;
    font-size: 14px;
    margin-left: 12px;
    font-weight: 500;
    font-size: 14px;

    & > strong {
      display: block;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 16px;
      font-size: 24px;
    }

    & > span {
      font-size: 12px;
      color: white;
    }
  }
`;

export default Footer;

import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Layout>
        <Logo src="/images/logo.png" alt="LOGO" />
        <p>
          2ECONDARY <strong>VOICE</strong>
        </p>
      </Layout>
      <Blank />
    </>
  );
};

const Layout = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 58px;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 50;

  & > p {
    color: white;
    font-size: 14px;
    margin-left: 12px;
    font-weight: 500;

    & > strong {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const Logo = styled.img`
  height: 32px;
  margin-top: 4px;
`;

const Blank = styled.div`
  height: 58px;
  background: transparent;
`;

export default Header;

import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Wrapper>
        <LayoutHeader />
        <div style={{ width: "100%" }}>{props.children}</div>
        <LayoutFooter />
      </Wrapper>
    </>
  );
};

export default Layout;

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

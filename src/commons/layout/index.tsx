import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

const Layout = (props: ILayoutProps) => {
  return (
    <Wrapper>
      <>
        <LayoutHeader />
        <MainContents>{props.children}</MainContents>
        <LayoutFooter />
      </>
    </Wrapper>
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

const MainContents = styled.div`
  min-height: 700px;
`;

import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const LayoutHeader = () => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <HeaderWrapper>
        <Logo onClick={onClickMoveToPage("/")}>
          AWESOME
          <br /> FOOD
          <br /> STORE
        </Logo>
        <Menu>
          <Contents onClick={onClickMoveToPage("/about")}>ABOUT</Contents>
          <Contents onClick={onClickMoveToPage("store")}>STORE</Contents>
        </Menu>
      </HeaderWrapper>
    </>
  );
};

export default LayoutHeader;

const HeaderWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
`;

const Logo = styled.div`
  color: #464ea3;
  font-size: 30px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  gap: 50px;
  font-weight: 600;
`;

const Contents = styled.div`
  cursor: pointer;
`;

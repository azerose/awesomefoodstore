import styled from "@emotion/styled";
import { Modal } from "antd";

export const HeaderTitle = styled.h1`
  color: #464ea3;
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: 6.4px;

  div:first-of-type {
    background-color: #464ea3;
    flex: 1;
  }
  div:last-of-type {
    background-color: #464ea3;
    flex: 1;
  }
`;

export const Line = styled.div`
  width: 0.75rem;
`;
export const ContentsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentsBox = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  margin-top: 24px;
`;

export const GridTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const GridItems = styled.img`
  width: 180px;
  height: 180px;
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export const DetailModal = styled(Modal)`
  min-width: 800px;
  max-width: 1000px;
  margin-top: calc((50% - 50vh));
`;

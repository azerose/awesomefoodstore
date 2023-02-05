import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 49%;
    margin-right: 1%;
  }
`;

export const ContentsWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-left: 1%;
  div {
    padding: 10px 0;
  }
`;

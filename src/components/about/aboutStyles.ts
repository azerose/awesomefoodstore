import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #464ea3;
`;

export const Docs = styled.div`
  width: 100%;
  font-size: 20px;
`;

export const Skills = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  flex-direction: column;
  border: 1px solid #464ea3;
`;

export const SkillTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #464ea3;
  border-bottom: 1px solid #464ea3;
  padding: 5px 0;
`;

export const SkillList = styled.div`
  text-align: center;
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #464ea3;
  :last-child {
    border: none;
  }
`;

export const ContentsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;

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

export const ContentsBox = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

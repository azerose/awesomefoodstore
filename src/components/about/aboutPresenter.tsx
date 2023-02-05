import * as S from "./aboutStyles";

const AboutPresenter = () => {
  return (
    <S.ContentsWrapper>
      <S.ContentsHeader>
        <S.HeaderTitle>ABOUT</S.HeaderTitle>
        <S.TitleWrapper>
          <S.Line></S.Line>
          <S.Line></S.Line>
          <S.Line></S.Line>
        </S.TitleWrapper>
      </S.ContentsHeader>
      <S.MainWrapper>
        <S.ContentsBox>
          <div>
            <S.Title>프로젝트설명</S.Title>
            <S.Docs>
              커먼그라운드 eat화면을 grid로 구현하기 위한 프로젝트
            </S.Docs>
          </div>
          <div>
            <S.Skills>
              <S.SkillTitle>기술스택</S.SkillTitle>
              <S.SkillList>Next.js</S.SkillList>
              <S.SkillList>Typescript</S.SkillList>
              <S.SkillList>emotion</S.SkillList>
              <S.SkillList>antd</S.SkillList>
            </S.Skills>
          </div>
          <div>
            <S.Title>프로젝트 실행방법</S.Title>
            <S.Docs>
              1. vscode를 실행시켜 terminal에 yarn run server를 실행시킨다
            </S.Docs>
            <S.Docs>
              2. 이후 새로운 terminal을 실행시켜 yarn dev를 시켜서 실행
            </S.Docs>
          </div>
        </S.ContentsBox>
      </S.MainWrapper>
    </S.ContentsWrapper>
  );
};

export default AboutPresenter;

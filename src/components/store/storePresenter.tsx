import * as S from "./storeStyles";
import { IStoreContainerProps } from "./storeTypes";
import { v4 } from "uuid";

const StorePresenter = (props: IStoreContainerProps) => {
  return (
    <>
      <S.ContentsHeader>
        <S.HeaderTitle>STORE</S.HeaderTitle>
        <S.TitleWrapper>
          <S.Line></S.Line>
          <S.Line></S.Line>
          <S.Line></S.Line>
        </S.TitleWrapper>
      </S.ContentsHeader>
      <S.MainWrapper>
        <S.ContentsBox>
          <S.GridTitle>STORE</S.GridTitle>
          <S.GridBox>
            {props.storeList.map((el: string) => (
              <>
                <div key={v4()}>
                  <S.GridItems src={el} />
                </div>
              </>
            ))}
          </S.GridBox>
        </S.ContentsBox>
      </S.MainWrapper>
    </>
  );
};

export default StorePresenter;

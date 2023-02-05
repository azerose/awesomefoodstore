import * as S from "./storeStyles";
import { IStoreContainerProps } from "./storeTypes";
import { v4 } from "uuid";
import DetailContainer from "../detail/detailContainer";

const StorePresenter = (props: IStoreContainerProps) => {
  return (
    <>
      {props.isOpen && (
        <S.DetailModal open={true} footer={null} onCancel={props.OnClickCancel}>
          <DetailContainer storeContents={props.storeContents} />
        </S.DetailModal>
      )}
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
            {props.storeList.map((el: any) => (
              <>
                <S.GridItems
                  key={el.id}
                  id={el.id}
                  src={el.image}
                  onClick={props.OnClickDetail}
                />
              </>
            ))}
          </S.GridBox>
        </S.ContentsBox>
      </S.MainWrapper>
    </>
  );
};

export default StorePresenter;

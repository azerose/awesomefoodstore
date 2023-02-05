import Image from "next/image";
import Link from "next/link";
import * as S from "./detailStyles";
import { IDetailContainer } from "./detailTypes";

const DetailPresenter = (props: IDetailContainer) => {
  return (
    <>
      <S.MainWrapper>
        <img src={String(props.storeContents?.image)} alt={"asdf"} />
        <S.ContentsWrapper>
          <div>{props.storeContents?.name}</div>
          <div>{props.storeContents?.description}</div>
          {props.storeContents?.url ? (
            <a href={props.storeContents.url}>{props.storeContents.url}</a>
          ) : null}
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default DetailPresenter;

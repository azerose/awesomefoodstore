import DetailPresenter from "./detailPresenter";
import { IStorePresenterProps } from "./detailTypes";

const DetailContainer = (props: IStorePresenterProps) => {
  return (
    <>
      <DetailPresenter storeContents={props.storeContents} />
    </>
  );
};

export default DetailContainer;

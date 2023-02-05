import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import StorePresenter from "./storePresenter";
import { IStoreContents } from "./storeTypes";

const StoreContainer = () => {
  const [storeList, setStoreList] = useState([]);
  const [storeContents, setStoreContents] = useState<IStoreContents>();
  const [isOpen, setIsOpen] = useState(false);

  const ReadList = async () => {
    const { data } = await axios.get("http://localhost:9000/stores");
    setStoreList(data);
  };

  useEffect(() => {
    (async () => {
      await ReadList();
    })();
  }, []);

  const OnClickDetail = async (event: MouseEvent<HTMLDivElement>) => {
    const { data } = await axios.get(
      `http://localhost:9000/stores/${event.currentTarget.id}`
    );
    setIsOpen(true);
    setStoreContents(data);
  };

  const OnClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <StorePresenter
      OnClickCancel={OnClickCancel}
      OnClickDetail={OnClickDetail}
      storeList={storeList}
      isOpen={isOpen}
      storeContents={storeContents}
    />
  );
};

export default StoreContainer;

import axios from "axios";
import { useEffect, useState } from "react";
import StorePresenter from "./storePresenter";

const StoreContainer = () => {
  const [storeList, setStoreList] = useState([]);
  const ReadList = async () => {
    const { data } = await axios.get("http://localhost:9000/stores");
    const result = data.map((el: any) => el.image);
    setStoreList(result);
  };

  useEffect(() => {
    (async () => {
      await ReadList();
    })();
  }, []);

  return <StorePresenter storeList={storeList} />;
};

export default StoreContainer;

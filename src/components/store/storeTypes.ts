import { MouseEvent } from "react";

export interface IStoreContainerProps {
  OnClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  OnClickCancel: () => void;
  storeContents?: IStoreContents;
  storeList: never[];
  isOpen: boolean;
}

export interface IStoreContents {
  id: string;
  name: string;
  description: string;
  image: string;
  thumb: string;
  url?: string;
}

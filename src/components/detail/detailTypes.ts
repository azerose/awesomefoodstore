export interface IDetailContainer {
  storeContents?: IStoreContents;
}

export interface IStorePresenterProps {
  storeContents?: IStoreContents;
}

interface IStoreContents {
  id: string;
  name: string;
  description: string;
  image: string;
  thumb: string;
  url?: string;
}

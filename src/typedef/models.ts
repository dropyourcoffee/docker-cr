

export interface ImageProfile {
  name: string,
  author?: string;
  size?: number;
  lastUpdate?: Date;
  desc?: string;
  nTags: number;
}


export interface ImageTag {
  name: string,
  author: string;
  digest: string;
  size: number;
  lastUpdate: Date;
}
import {css} from "@emotion/react";
import TitleCard from "@components/organisms/TitleCard";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import {useEffect, useState} from "react";
import { flexCenter } from "@styles";


export type Image = {
  name: string,
  nTags: number,
};

const MainTemplate = ()=>{

  const nImages: number = 4;
  const [images, setImages] = useState<Array<Image>>([]);

  useEffect(()=>{
    loadImage();
  },[]);

  const {callback:loadImage, isLoading} = useLoadingCallback(async()=>{

    const imgs:Array<Image> = await new Promise((resolve, _)=>{
      setTimeout(()=>{
        resolve([
          {name: 'image1', nTags: 1},
          {name: 'image2', nTags: 2}
        ]);
      },1000);
    });

    setImages(imgs);

  },[]);

  return(
    <div css={css`
      max-width: 1140px;
      border: 1px solid black;
      margin:auto;
      padding: 0.25rem;
      padding-top: 3em;
    `}
    >
      <TitleCard
        title={"Repositories in Container Registry"}
        subtitle={`${nImages} images available`}
      />

      {isLoading && <div css={css`${flexCenter}; height: 100px;`}>
        <p>Loading...</p>
      </div>}
      {!isLoading && images.length &&
        images.map((i, k)=><div key={k}>{i.name}</div>)

      }

    </div>
  );
};

export default MainTemplate;
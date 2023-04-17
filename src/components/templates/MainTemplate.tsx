import {css} from "@emotion/react";
import TitleCard from "@components/organisms/TitleCard";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import {useEffect, useState} from "react";
import { flexCenter } from "@styles";
import ImageCard from "@components/organisms/ImageCard";
import {ImageCardProps} from "@components/organisms/ImageCard";


const bodyWrap = css`
  padding: 1em 0.5em;
  
  & {
    div.imagecard {
      margin: 0.5rem;
    }
  }
  
`;

const MainTemplate = ()=>{

  // const nImages: number = 3;
  const [nImages, setNImages] = useState<number>(0);
  const [images, setImages] = useState< Array<ImageCardProps> >([]);

  useEffect(()=>{
    loadImage();
  },[]);

  const {callback:loadImage, isLoading} = useLoadingCallback(async()=>{

    const imgs:Array<ImageCardProps> = await new Promise((resolve, _)=>{
      setTimeout(()=>{
        resolve([
          {name: 'foo', author:"dropyourcoffee", desc:"do not pull this", nTags: 1},
          {name: 'bar', author:"dropyourcoffee", desc:"Up-to-date Image", lastUpdate:new Date(), nTags: 2},
          {name: 'baz', author:"dropyourcoffee", lastUpdate:new Date('2023-04-01'), nTags: 2}
        ]);
      },1500);
    });

    setImages(imgs);
    setNImages(imgs.length || 0);

  },[]);

  return(
    <div css={css`
      max-width: 1140px;
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
        <div css={bodyWrap}>
          {
            images.map((i, k)=>
              <ImageCard key={k} {...i}/>
            )
          }
        </div>

      }

    </div>
  );
};

export default MainTemplate;
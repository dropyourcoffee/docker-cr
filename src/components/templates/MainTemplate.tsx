import {css} from "@emotion/react";
import TitleCard from "@components/organisms/TitleCard";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import {useEffect, useState} from "react";
import { flexCenter } from "@styles";
import ImageCard from "@components/organisms/ImageCard";
import {ImageCardProps} from "@components/organisms/ImageCard";
import {reqFetchImages} from "@api/image";
import {ClipLoader} from "react-spinners";

const bodyWrap = css`
  padding: 1em 0.5em;
  
  & {
    .imagecard {
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

    const imgs:Array<ImageCardProps> = await reqFetchImages();

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
        <ClipLoader/>
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
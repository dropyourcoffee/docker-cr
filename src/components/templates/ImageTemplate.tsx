import ImageBanner from "@components/organisms/ImageBanner";
import {useState, useEffect} from "react";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { ImageCardProps } from "@components/organisms/ImageCard";
import * as Typography from "@styles/typography";
import { reqImageProfile, reqImageTagList } from "@api/image";
import {css} from "@emotion/react";
import { useThemedStyle } from "@hooks/useThemedStyle";
import { ImageTag } from "@typedef/models";
import { flexCenter } from "@styles";
import {ClipLoader} from "react-spinners";
import ImageTagCard from "@components/organisms/ImageTagCard";

export interface ImageTemplateProps {
  img: string;
}

const ImageTemplate = ({img:name}: ImageTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, nTags:0});
  const [imgTags, setImgTags] = useState<ImageTag[]>([]);

  const {callback:loadImage, isLoading: isLoadingImages} = useLoadingCallback(async()=>{

    await Promise.all([
      (async ()=>{
        const img: ImageCardProps = await reqImageProfile(name);
        setImgInfo(img);
      })(),
      (async ()=>{
        const tags: Array<ImageTag> = await reqImageTagList(name);
        setImgTags(tags);

      })(),

    ]);

  },[name]);

  useEffect(()=>{
    loadImage();
  },[]);

  const repotagBodyContainer = useThemedStyle(theme=>css`
    height: 100vh;
    overflow-y: scroll;
    background-color: ${theme.color.backgroundSecondary};
    padding-top: 1rem;
  `);


  return(<div >
    <ImageBanner {...imgInfo}/>
    <div css={repotagBodyContainer}>

      <div className={'container'} >

        <Typography.Headline4>
          Tags
        </Typography.Headline4>
        <div>
          {isLoadingImages &&
            <div css={flexCenter}><ClipLoader/></div>}
          {!isLoadingImages &&
            imgTags.map((it, k)=>(
              <ImageTagCard {...it} key={k}/>
            ))
          }
        </div>

      </div>
    </div>
  </div>);
};

export default ImageTemplate;
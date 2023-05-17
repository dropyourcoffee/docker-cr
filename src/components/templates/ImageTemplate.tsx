import {useState, useEffect} from "react";
import {ClipLoader} from "react-spinners";
import {css} from "@emotion/react";

import { ImageTag } from "@typedef/models";
import { reqImageProfile, reqImageTagInfoList } from "@api/image";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { useThemedStyle } from "@hooks/useThemedStyle";
import { flexCenter } from "@styles";
import * as Typography from "@styles/typography";
import ImageBanner from  "@components/organisms/ImageBanner";
import { ImageCardProps } from "@components/organisms/ImageCard";
import ImageTagCard from "@components/organisms/ImageTagCard";

export interface ImageTemplateProps {
  img: string;
}

const ImageTemplate = ({img:name}: ImageTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, lastUpdate:new Date(0), tags:[]});
  const [imgTags, setImgTags] = useState<ImageTag[]>([]);

  const {callback:loadImage, isLoading: isLoadingImages} = useLoadingCallback(async()=>{
    const img: ImageCardProps = await reqImageProfile(name);
    setImgInfo(img);
    const tags: Array<ImageTag> = await reqImageTagInfoList(name, img.tags);
    setImgTags(tags);

  },[name]);


  useEffect(()=>{
    loadImage();
    window.scrollTo(0, 0);
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
import ImageBanner from "@components/organisms/ImageBanner";
import {useState, useEffect} from "react";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { ImageCardProps } from "@components/organisms/ImageCard";
import * as Typography from "@styles/typography";
import {reqImageProfile} from "@api/image";

export interface ImageTemplateProps {
  img: string;
}

const ImageTemplate = ({img:name}: ImageTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, nTags:0});

  const {callback:loadImage, isLoading} = useLoadingCallback(async()=>{
    const img: ImageCardProps = await reqImageProfile(name);
    setImgInfo(img);

  },[]);

  useEffect(()=>{
    loadImage();
  },[]);

  return(<div>
    <ImageBanner {...imgInfo}/>
    <div className={'container'}>

      <Typography.Headline4>
        Tags
      </Typography.Headline4>
    </div>
  </div>);
};

export default ImageTemplate;
import ImageBanner from "@components/organisms/ImageBanner";
import {useState, useEffect} from "react";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { ImageCardProps } from "@components/organisms/ImageCard";

export interface ImageTemplateProps {
  img: string;
}

const ImageTemplate = ({img}: ImageTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name:img});

  const {callback:loadImage, isLoading} = useLoadingCallback(async()=>{

    const img: ImageCardProps = await new Promise((resolve, _)=>{
      setTimeout(()=>{
        resolve({
            name: imgInfo.name, author:"dropyourcoffee", desc:"Up-to-date Image", lastUpdate:new Date(), nTags: 2
        });
      },600);
    });

    setImgInfo(img);

  },[]);

  useEffect(()=>{
    loadImage();
  },[]);

  return(<div>
    <ImageBanner imageName={imgInfo.name} {...imgInfo}/>
  </div>);
};

export default ImageTemplate;
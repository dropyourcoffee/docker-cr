import React, {useState, useEffect, useCallback} from "react";
import {css} from "@emotion/react";

import { ImageBlob } from "@typedef/models";
import { reqImageBlob, reqImageProfile, reqImageTagList } from "@api/image";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { useThemedStyle } from "@hooks/useThemedStyle";
import { flexRow } from "@styles";
import * as Typography from "@styles/typography";
import ImageBanner from  "@components/organisms/ImageBanner";
import { ImageCardProps } from "@components/organisms/ImageCard";
import ImageLayerSection from "@components/organisms/ImageLayerSection";
import ImageSummarySection from "@components/organisms/ImageSummarySection";

export interface HistoryTemplateProps {
  img: string;
}


const HistoryTemplate = ({img:name}: HistoryTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, nTags:0});
  const [imgBlob, setImgBlob] = useState<Partial<ImageBlob>>({});
  // const [layerSel, setLayerSel] = useState<number|null>(null);

  const {callback:loadImage, isLoading: isLoadingImages} = useLoadingCallback(async()=>{

    await Promise.all([
      (async ()=>{
        const img: ImageCardProps = await reqImageProfile(name);
        setImgInfo(img);
      })(),
      (async ()=>{
        const blob: ImageBlob = await reqImageBlob(name);
        setImgBlob(blob);

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
    padding-top: 2rem;
    & > .container {
      padding-bottom: 5em;
    }
  `);

  const containerStyle = useThemedStyle(theme=>css`
    ${flexRow}
    align-items: stretch;
    width: 100%;
    margin: 1em 0;
    background-color: ${theme.color.backgroundPrimary};
  `);


  const imageSummary = {
    created: new Date(),
    arch: 'amd64',
    version: '19.03.12',
    env:'PATH=/usr/local/sbin:/usr/local/bin',

    os: 'linux',
    cmd: '/bin/sh'
  };

  return(<div >
    <ImageBanner {...imgInfo}/>
    <div css={repotagBodyContainer}>


      <div className={'container'}>

        <Typography.Title5> Summary </Typography.Title5>

        <div css={[containerStyle, css`padding: 0.5em 1em 1.5em 1em`]}>
          <ImageSummarySection {...imageSummary}/>
        </div>


        <Typography.Title5> Image Layers </Typography.Title5>

        <div css={containerStyle}>
          <ImageLayerSection imgBlob={imgBlob}/>
        </div>


      </div> {/** End Of Container Div */}
    </div>
  </div>);
};

export default HistoryTemplate;

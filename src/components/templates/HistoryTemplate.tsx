import React, {useState, useEffect, useCallback} from "react";
import {css} from "@emotion/react";

import { ImageBlob } from "@typedef/models";
import { reqImageBlob, reqImageProfile, reqImageTagList } from "@api/image";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { useThemedStyle } from "@hooks/useThemedStyle";
import { flexColumn, flexRow, flexRowBetween } from "@styles";
import * as Typography from "@styles/typography";
import ImageBanner from  "@components/organisms/ImageBanner";
import { ImageCardProps } from "@components/organisms/ImageCard";

export interface HistoryTemplateProps {
  img: string;
}


const HistoryTemplate = ({img:name}: HistoryTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, nTags:0});
  const [imgBlob, setImgBlob] = useState<Partial<ImageBlob>>({});
  const [layerSel, setLayerSel] = useState<number|null>(null);

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
    ${flexRowBetween}
    width: 100%;
    margin-top: 2em;
    height: 50vh;
  `);

  const layerBlock = useThemedStyle(theme=>css`
    width: 40%;
    background-color: ${theme.color.backgroundPrimary};
    height: 100%;
    overflow-y: scroll;
    
    .lrow {
      ${flexRow}
       background-color: ${theme.color.backgroundPrimary};
       border-top: 1px solid ${theme.color.borderPrimary};
       border-bottom: 1px solid ${theme.color.borderPrimary};
       &:hover {
         background-color: ${theme.color.backgroundSecondary};
       }
       
     .rownum {
       min-width: 30px;
       text-align: center;
       padding: 1rem;
     }
     
     .ctx {
       flex: 1;
       padding: 1rem;
     }
     
    }
    
    .lrow.selected {
       background-color: ${theme.color.borderPrimary};
    }
    
  `);

  const cmdBlock = useThemedStyle(theme => css`
    width: 60%;
    padding: 1em;
    height: 100%;
    & > p {
      background-color: ${theme.color.backgroundAccent};
      color:white;
      font-family: "Courier New";
      border-radius: 0.5rem;
      padding: 0.75rem;
      word-wrap: break-word;
    }
  `);

  const onClickLayer = useCallback((e: any) => {
    const rid = e.target.parentNode.getAttribute('data-rid');
    setLayerSel(parseInt(rid));
    return;
  },[layerSel]);

  const parseCmdPhrase = useCallback((cmd:string, max=0)=>{
    let parsed = cmd.replace("#(nop)","").replace("/bin/sh -c ", "");

    return (!!max && parsed.length > max)
      ? parsed.slice(0, 30)+"..."
      : parsed;

  },[]);


  return(<div >
    <ImageBanner {...imgInfo}/>
    <div css={repotagBodyContainer}>

      <div className={'container'}>

        <Typography.Title5> Image Layers </Typography.Title5>

        <div css={containerStyle}>

          <div css={layerBlock}>
            {imgBlob.history && imgBlob.history.map((h, k)=>(
              <div className={'lrow ' + (layerSel == k?"selected":"")} onClick={onClickLayer} data-rid={k}>
                <div className={'rownum'}> {k+1} </div>
                <div className={'ctx'}>
                  {
                    parseCmdPhrase(h.created_by||"", 30)
                  }
                </div>
              </div>
            ))}
          </div>


          <div css={cmdBlock}>
            {
              (layerSel != null) && (imgBlob.history) &&
              <p>
                {
                  parseCmdPhrase(""+imgBlob.history[layerSel].created_by)
                }
              </p>
            }
          </div>

        </div> {/** End Of Container */}

      </div>
    </div>
  </div>);
};

export default HistoryTemplate;

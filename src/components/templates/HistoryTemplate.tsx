import {useState, useEffect} from "react";
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
    
    & > .lcontainer {
      flex: 2;
      border: 1px solid ${theme.color.borderPrimary};
      padding: 1em;
      
      .lrow{
        ${flexRow}
         background-color: ${theme.color.backgroundPrimary};
         border: 1px solid ${theme.color.borderPrimary};
         &:hover {
           background-color: ${theme.color.borderPrimary};
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
    }
  `);

  const layerBlock = useThemedStyle(theme=>css`
    flex: 2;
    border: 1px solid ${theme.color.borderPrimary};
    padding: 1em;
    height: 50vh;
    overflow-y: scroll;
    
    .lrow{
      ${flexRow}
       background-color: ${theme.color.backgroundPrimary};
       border: 1px solid ${theme.color.borderPrimary};
       &:hover {
         background-color: ${theme.color.borderPrimary};
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
    
  `);

  const cmdBlock = useThemedStyle(theme => css`
    flex: 3;
    border: 1px solid black;
    padding: 1em;
    ${flexColumn}
  `);


  return(<div >
    <ImageBanner {...imgInfo}/>
    <div css={repotagBodyContainer}>

      <div className={'container'}>

        <Typography.Title5> Image Layers </Typography.Title5>

        <div css={containerStyle}>
          <div css={layerBlock}>
            {imgBlob.history && imgBlob.history.map((h, k)=>(
              <div className={'lrow'}>
                <div className={'rownum'}> {k+1} </div>
                <div className={'ctx'}>
                  {h.created_by.replace("#(nop)","").replace("/bin/sh -c ", "").slice(0, 30)+"..."}
                </div>
              </div>
            ))}
          </div>

          <div css={cmdBlock}>
            right
          </div>

        </div>

      </div>
    </div>
  </div>);
};

export default HistoryTemplate;
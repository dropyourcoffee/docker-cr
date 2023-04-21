import ImageBanner from "@components/organisms/ImageBanner";
import {useState, useEffect} from "react";
import { useLoadingCallback } from "@hooks/useLoadingCallback";
import { ImageCardProps } from "@components/organisms/ImageCard";
import * as Typography from "@styles/typography";
import { reqImageProfile, reqImageTagList } from "@api/image";
import {css} from "@emotion/react";
import { useThemedStyle } from "@hooks/useThemedStyle";
import {NavLink} from "react-router-dom";
import { ImageTag } from "@typedef/models";
import { flexRow, flexRowBetween, popupShadowStyleOnHover } from "@styles";
import { formatBytes, timeSince } from "@util";

export interface ImageTemplateProps {
  img: string;
}

const ImageTemplate = ({img:name}: ImageTemplateProps)=>{

  const [imgInfo, setImgInfo] = useState<ImageCardProps>({name, nTags:0});
  const [imgTags, setImgTags] = useState<ImageTag[]>([]);

  const {callback:loadImage, _} = useLoadingCallback(async()=>{

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

  const repotagListItem = useThemedStyle(theme=> css`
    border: 1px solid ${theme.color.borderPrimary};
    background-color: ${theme.color.backgroundPrimary};
    margin-top: 10px;
    padding: 0.5rem;
    ${popupShadowStyleOnHover}
    
    .taglink {
      color:${theme.color.primary};
    }
    
    &{
      .header {
        p {
          margin-bottom: 0.25rem;
        }
      
      }
      .body {
        margin-top: 1em;
        
        & > div{
          ${flexRow}
          & > span {
            font-size: 14px;
            flex: 1;
            flex-wrap: nowrap;
          }
        }
      
      }
    }
  `);

  return(<div >
    <ImageBanner {...imgInfo}/>
    <div css={repotagBodyContainer}>

      <div className={'container'} >

        <Typography.Headline4>
          Tags
        </Typography.Headline4>
        <div>
          {imgTags.map(({name:tagName, author, digest, size, lastUpdate}:ImageTag, k)=>(
            <div css={repotagListItem}>
              <div className={'header'} key={k}>
                <Typography.Body1>Tag</Typography.Body1>
                <NavLink className={'taglink'} to={"#"}>{tagName}</NavLink>
                <Typography.Body1>{`Last pushed ${timeSince(lastUpdate)}`}</Typography.Body1>
              </div >
              <div className={'body'}>
                <div>
                  <span>DIGEST</span>
                  <span>SIZE</span>
                </div>
                <div>
                  <span className={'taglink'}>{digest.replace("sha256:","").slice(0,13)}</span>
                  <span>{formatBytes(size)}</span>
                </div>
              </div >
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>);
};

export default ImageTemplate;
import { NavLink } from "react-router-dom";
import {css} from "@emotion/react";

import {popupShadowStyleOnHover, flexRow} from "@styles";
import * as Typography from "@styles/typography";
import { formatBytes, timeSince } from "@util";
import {useThemedStyle} from "@hooks/useThemedStyle";


export interface ImageTagCardProps {
  name:string,
  author:string,
  digest:string,
  size:number,
  lastUpdate:Date

}

const ImageTagCard = ({name:tagName, author, digest, size, lastUpdate}: ImageTagCardProps) => {

  const repotagListItem = useThemedStyle(theme=> css`
    border: 1px solid ${theme.color.borderPrimary};
    background-color: ${theme.color.backgroundPrimary};
    width: 100%;
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

  return(
    <div css={repotagListItem}>
      <div className={'header'}>
        <Typography.Body1>Tag</Typography.Body1>
        <NavLink className={'taglink'} to={"history"}>{tagName}</NavLink>
        {/*<Typography.Body1>{`Last pushed ${timeSince(lastUpdate)}`}</Typography.Body1>*/}
      </div >
      <div className={'body'}>
        <div>
          <span>IMAGE DIGEST</span>
          <span>SIZE</span>
        </div>
        <div>
          <span className={'taglink'}>
            <NavLink className={'taglink'} to={"history"}>
              {digest.replace("sha256:","").slice(0,13)}
            </NavLink>
          </span>
          <span>{formatBytes(size)}</span>
        </div>
      </div >
    </div>
    );
};

export default ImageTagCard;
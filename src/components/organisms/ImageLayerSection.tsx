import { ImageBlob } from "@typedef/models";
import React, { useCallback, useState } from "react";
import { useThemedStyle } from "@hooks/useThemedStyle";
import { css } from "@emotion/react";
import { flexRow } from "@styles";

export interface ImageLayerSectionProps {
  imgBlob: Partial<ImageBlob>
}

const ImageLayerSection = ({imgBlob}:ImageLayerSectionProps) => {

  const [layerSel, setLayerSel] = useState<number|null>(null);

  const layerBlock = useThemedStyle(theme=>css`
    width: 40%;
    background-color: ${theme.color.backgroundPrimary};
    max-height: 50vh;
    overflow-y: scroll;
    
    .lrow {
      ${flexRow}
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
    background-color: ${theme.color.backgroundSecondary};
    
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

  return <>
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
            parseCmdPhrase(""+imgBlob.history[layerSel]?.created_by)
          }
        </p>
      }
    </div>
  </>;

};

export default ImageLayerSection;
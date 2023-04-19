import * as Typography from "@styles/typography";
import {css} from "@emotion/react";
import {useThemedStyle} from "@hooks/useThemedStyle";
import { flexCenter, flexRow } from "@styles";
import { BsFillBoxFill } from "react-icons/bs";

export interface ImageBannerProps {
  imageName: string,
  author?: string,
  size?: number,
  desc?: string,
  lastUpdate?: Date,

}

const BannerInner = css`
      // border: 1px solid black;
      ${flexRow}
      padding: 3em 0.5em;
      height: 180px;
`;

const ImageBanner = ({imageName, author, size, desc, lastUpdate}:ImageBannerProps)=>{
  // const theme = useTheme();

  const BannerWrap = useThemedStyle(theme => css`
      width: 100%;
      border-top: 1px solid ${theme.color.borderPrimary};
      border-bottom: 1px solid ${theme.color.borderPrimary};
  `);

  // name: 'bar', author:"dropyourcoffee", desc:"Up-to-date Image", lastUpdate:new Date(), nTags: 2
  return (
    <div css={BannerWrap}>
      <div className={'container'} css={BannerInner}>
        <div css={css` min-width: 160px; ${flexCenter}`} >
          <span> <BsFillBoxFill size={50} /> </span>
        </div>
        <div>
          {/** Right */}
          <Typography.Headline3>{imageName}</Typography.Headline3>
          { author && <Typography.Subtitle3> By {author}</Typography.Subtitle3> }
          { lastUpdate && lastUpdate instanceof Date &&
            <Typography.Subtitle3> Updated on {lastUpdate.toLocaleDateString()} </Typography.Subtitle3>
          }
        </div>
      </div>

    </div>
  );
};

export default ImageBanner;
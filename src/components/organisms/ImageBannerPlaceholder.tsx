import { useThemedStyle } from "@hooks/useThemedStyle";
import { css } from "@emotion/react";
import { flexCenter } from "@styles";
import { BsFillBoxFill } from "react-icons/bs";
import * as Typography from "@styles/typography";
import {BannerInner} from "@components/organisms/ImageBanner";


interface ImageBannerPlaceholderProps {
  name: string
}

const ImageBannerPlaceholder = ({name: imageName}:ImageBannerPlaceholderProps)=>{


  const BannerWrap = useThemedStyle(theme => css`
      width: 100%;
      border-top: 1px solid ${theme.color.borderPrimary};
      border-bottom: 1px solid ${theme.color.borderPrimary};
  `);

  return (
    <div css={BannerWrap}>
      <div className={'container'} css={BannerInner}>
        <div css={css` min-width: 160px; ${flexCenter}`} >
          <span> <BsFillBoxFill size={50} /> </span>
        </div>
        <div>
          {/** Right */}
          <Typography.Headline3>{imageName}</Typography.Headline3>
          <Typography.Subtitle3>{' '}</Typography.Subtitle3>
          <Typography.Subtitle3>{' '}</Typography.Subtitle3>
        </div>
      </div>

    </div>
  );
};

export default ImageBannerPlaceholder;
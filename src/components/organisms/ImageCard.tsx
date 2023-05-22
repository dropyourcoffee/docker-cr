import {BsFillBoxFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import { css } from "@emotion/react";
import {
  flexCenter,
  flexRow, flexRowBetween,
  popupShadowStyleOnHover
} from "@styles";
import * as Typography from "@styles/typography";
import Divider from "@components/atoms/Divider";
import {useThemedStyle} from "@hooks/useThemedStyle";
import {ImageProfile} from "@typedef/models";

export interface ImageCardProps extends Omit<ImageProfile, 'size'> {

}

const cardBody = css`
  padding: 0.5em;
  flex: 1;
`;

const ImageCard = ({name, author="", lastUpdate, tags, desc=""}:ImageCardProps)=>{

  const cardWrap = useThemedStyle(theme => css`
    border: 1px solid ${theme.color.borderPrimary};
    ${flexRow}
    height: 140px;
    padding: 0.5em;
    ${popupShadowStyleOnHover}
  `,);

  return (<NavLink to={`/im/${name}`} css={cardWrap} className={'imagecard'} >
    <div css={css`
      min-width: 80px;
      ${flexCenter}`}
    >
      <span> <BsFillBoxFill size={30} /> </span>
    </div>

    <div css={cardBody}>
      <div css={flexRowBetween}>
        <Typography.Base >
          <b>{name}</b>
        </Typography.Base>
        <Typography.Base >
          tags: {tags.length}
        </Typography.Base>
      </div>

      <Divider/>


      <Typography.Base>
        {lastUpdate && lastUpdate instanceof Date && `Updated on ${lastUpdate.toLocaleString()}`}
      </Typography.Base>
      {author &&
      <Typography.Base>By <b>{author}</b></Typography.Base>
      }
      {desc &&
        <Typography.Base css={css`margin-top: 10px;`}>{desc}</Typography.Base>
      }

    </div>


  </NavLink>);

};

export default ImageCard;
import {css, useTheme } from "@emotion/react";
import {useMemo} from "react";
import { flexCenter, flexRow } from "@styles";
import * as Typography from "@styles/typography";
import {BsFillBoxFill} from "react-icons/bs";
import Divider from "@components/atoms/Divider";

export interface ImageCardProps {
  name: string;
  author?: string;
  lastUpdate?: Date;
  desc?: string;
  nTags?: number;

}

const cardBody = css`
  padding: 0.5em;
  flex: 1;
`;

const ImageCard = ({name, author="", lastUpdate, desc=""}:ImageCardProps)=>{

  const theme = useTheme();

  const cardWrap = useMemo(()=>css`
    border: 1px solid ${theme.color.borderPrimary};
    ${flexRow};
    height: 140px;
    padding: 0.5em;
    &:hover{
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    }
  `,[]);

  return (<div css={cardWrap} className={'imagecard'}>
    <div css={css`
      min-width: 80px;
      ${flexCenter}`}
    >
      <span> <BsFillBoxFill size={30} /> </span>
    </div>

    <div css={cardBody}>
      <Typography.Base >
        <b>{name}</b>
      </Typography.Base>

      <Divider/>

      {author &&
        <Typography.Base>By <b>{author}</b></Typography.Base>
      }

      {lastUpdate && lastUpdate instanceof Date &&
        <Typography.Base>Updated on {lastUpdate.toLocaleString()}</Typography.Base>
      }
      {desc &&
        <Typography.Base css={css`margin-top: 10px;`}>{desc}</Typography.Base>
      }

    </div>


  </div>);

};

export default ImageCard;
import * as Typography from "@styles/typography";
import {css, useTheme, Theme} from "@emotion/react";

export interface TitleCardProps {
  title?: string;
  subtitle? : string;
}

const titleCardStyle = (theme:Theme) => css`
  border: 2px solid ${theme.color.borderPrimary};
  padding: 2em 1em;
`;

const TitleCard = ({title="", subtitle=""}:TitleCardProps) =>{

  const theme = useTheme();

  return(
    <div css={titleCardStyle(theme)}>
      <Typography.Title2>
        {title}
      </Typography.Title2>
      <Typography.Subtitle2 css={css`margin-left: 10px;`}>
        {subtitle}
      </Typography.Subtitle2>
    </div>
  )
};

export default TitleCard;
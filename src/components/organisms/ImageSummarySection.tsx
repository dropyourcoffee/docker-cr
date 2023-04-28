import { css } from "@emotion/react";
import React from "react";
import * as ImageSummaryHeading from "@components/molecules/ImageSummaryHeadings";

export interface ImageSummarySectionProps {
  created: Date,
  arch: string,
  version: string,
  env: string,

  os:string,
  cmd:string,
}

const ImageSummarySection = ({created, arch, version, env, os, cmd}:ImageSummarySectionProps) => {
  return <>
    <div css={css`flex:1;`}>

      <ImageSummaryHeading.Created/>
      <p> {created.toLocaleDateString()} </p>

      <ImageSummaryHeading.Architecture/>
      <p> {arch} </p>

      <ImageSummaryHeading.Version/>
      <p> {version} </p>

      <ImageSummaryHeading.Env/>
      <p> {env} </p>

    </div>

    <div css={css`flex:1;`}>

      <ImageSummaryHeading.OS/>
      <p> {os} </p>

      <ImageSummaryHeading.Cmd/>
      <p> {cmd} </p>

    </div>
  </>
};

export default ImageSummarySection;


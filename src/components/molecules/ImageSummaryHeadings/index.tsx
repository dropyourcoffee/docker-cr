import {css} from "@emotion/react";
import { flexRow } from "@styles";
import { BsCalendar2Plus } from "react-icons/bs";
import {CgSmartphoneChip} from "react-icons/cg";
import {FaDocker} from "react-icons/fa";
import {IoMdList} from "react-icons/io";
import {BsHouseGear} from "react-icons/bs";
import {MdOutlineOutput} from "react-icons/md";
import * as Typography from "@styles/typography";
import React from "react";

const HeadingStyle = css`
  ${flexRow}
  & > span {
    margin-right: 10px;
    svg {
      margin: 0 auto;
    }
  }
  margin-top: 20px;
`;

export const Created = ()=>
  <div css={HeadingStyle}>
    <span>
      <BsCalendar2Plus size={20}/>
    </span>
    <Typography.Title5> Created </Typography.Title5>
  </div>;


export const Architecture = ()=>
  <div css={HeadingStyle}>
    <span>
      <CgSmartphoneChip size={20}/>
    </span>
    <Typography.Title5> Architecture </Typography.Title5>
  </div>;


export const Version = ()=>
  <div css={HeadingStyle}>
    <span>
      <FaDocker size={20}/>
    </span>
    <Typography.Title5> Docker Version </Typography.Title5>
  </div>;


export const Env = ()=>
  <div css={HeadingStyle}>
    <span>
      <IoMdList size={20}/>
    </span>
    <Typography.Title5> ENV </Typography.Title5>
  </div>;


export const OS = ()=>
  <div css={HeadingStyle}>
    <span>
      <BsHouseGear size={20}/>
    </span>
    <Typography.Title5> OS </Typography.Title5>
  </div>;


export const Cmd = ()=>
  <div css={HeadingStyle}>
    <span>
      <MdOutlineOutput size={20}/>
    </span>
    <Typography.Title5> Cmd </Typography.Title5>
  </div>;



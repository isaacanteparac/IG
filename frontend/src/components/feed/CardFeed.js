import React, { Component } from "react";

import { ContentImg, Img } from "../../styles/image";
import { ContentColumnCenter, Content, ContentLeft } from "../../styles/div";
import { Label } from "../../styles/letter";

//icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


export default function CardFeed(props) {
  return (
    <ContentColumnCenter post>
      <ContentImg post>
        <Img post src={props.image} />
      </ContentImg>
      <Content infPost>
        <ContentLeft infPost>
          <ContentImg photoUser>
            <Img photoUser src={props.image} />
          </ContentImg>
          <Label nicknamePost>
            {props.nickname}
          </Label>
        </ContentLeft>
        <Content>
          
        </Content>
      </Content>
    </ContentColumnCenter>
  );
}

import React, { useContext, useState } from "react";
import { yesToken } from "../../auth/crudApi";
import { AuthContext } from "../../auth/Context";

import { ContentImg, Img } from "../../styles/image";
import {
  ContentColumnCenter,
  Content,
  ContentLeft,
  ContentRight,
} from "../../styles/div";
import { Label } from "../../styles/letter";

//icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function CardFeed(props) {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [btnHeart, setBtnHeart] = useState(false);
  const [id_post, setId_post] = useState("");

  const heartData ={
    count:1,
    id_user: user.id,
    id_post
  }


  const onClickHeart = async () => {
    setBtnHeart(btnHeart => !btnHeart);
    if(btnHeart){
      setId_post(props.idPost)
      console.log(heartData)
      await yesToken("heart", heartData, "POST");
    }

  };

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
          <Label nicknamePost>{props.nickname}</Label>
        </ContentLeft>
        <ContentRight interactionPost>
          <ContentLeft btnInteractionPost>
            <FavoriteBorderOutlinedIcon
              sx={[
                {
                  marginRight: "5px",
                  color: "#999",
                  "&:active": {
                    color: "red",
                  },
                },
              ]}
              onClick={onClickHeart}
            />
            <Label >{props.countHeart}</Label>
          </ContentLeft>
          <ContentLeft btnInteractionPost>
            <ChatBubbleOutlineOutlinedIcon
              sx={[
                {
                  marginRight: "5px",
                  color: "#999",
                  "&:active": {
                    color: "black",
                  },
                },
              ]}
            />
            <Label>{props.countComment}</Label>
          </ContentLeft>
        </ContentRight>
        <Content></Content>
      </Content>
    </ContentColumnCenter>
  );
}

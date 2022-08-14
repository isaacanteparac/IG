import React, { useContext, useState } from "react";

//icons
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

//styles
import {
  Content,
  ContentColumnCenter,
  ContentCenter,
  ContentLeft,
  Hr,
} from "../../styles/div";
import { Label } from "../../styles/letter";
import { Img, ContentImg } from "../../styles/image";
import { Input } from "../../styles/inputs";
import { Button } from "../../styles/button";

import { AuthContext } from "../../auth/Context";
import Feed from "./Feed";
import Message from "./Message";
import Explored from "./Explored";
import Direct from "./Direct";
import Setting from "./Setting";


export default function Navigation() {
  const { auth, logout } = useContext(AuthContext);
  const mdTheme = createTheme();
  const { user } = auth;

  const [feed, setFeed] = useState(true);
  const [explored, setExplored] = useState(false);
  const [message, setMessage] = useState(false);
  const [direct, setDirect] = useState(false);
  const [setting, setSetting] = useState(false);

  const btnLogout = () => {
    logout();
  };

  const btnFeed = () => {
    setFeed(true);
    setExplored(false);
    setMessage(false);
    setDirect(false);
    setSetting(false);
  };

  const btnExplored = () => {
    setExplored(true);
    setFeed(false);
    setMessage(false);
    setDirect(false);
    setSetting(false);
  };

  const btnMessage = () => {
    setMessage(true);
    setFeed(false);
    setExplored(false);
    setDirect(false);
    setSetting(false);
  };

  const btnDirect = () => {
    setDirect(true);
    setFeed(false);
    setExplored(false);
    setMessage(false);
    setSetting(false);
  };

  const btnSetting = () => {
    setSetting(true);
    setFeed(false);
    setExplored(false);
    setMessage(false);
    setDirect(false);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Content home>
        <Content menu>
          <Content>
            <Label nameApp>imageXd</Label>
          </Content>
          <Content>
            <ContentImg photoProfile>
              <Img
                photoProfile
                src="https://mussica.info/wp-content/uploads/2021/05/Billie-Eilish-cover.jpeg"
              />
            </ContentImg>
            <ContentColumnCenter noCopy>
              <Label trasnparentNameBig>
                {user.name} {user.lastname}
              </Label>
              <Label trasnparentNicknameBig>@{user.nickname}</Label>
            </ContentColumnCenter>
            <ContentCenter inf_follower>
              <ContentColumnCenter noCopy inf_follower>
                <Label blod>50</Label>
                <Label trasnparent>Posts</Label>
              </ContentColumnCenter>
              <Hr optionsV />
              <ContentColumnCenter noCopy inf_follower>
                <Label blod>50</Label>
                <Label trasnparent>Followers</Label>
              </ContentColumnCenter>
              <Hr optionsV />
              <ContentColumnCenter noCopy inf_follower>
                <Label blod>50</Label>
                <Label trasnparent>Followings</Label>
              </ContentColumnCenter>
            </ContentCenter>
          </Content>
          <Content options>
            <ContentLeft options noCopy onClick={btnFeed}>
              <AutoAwesomeMosaicOutlinedIcon />
              <Label options>Feed</Label>
            </ContentLeft>
            <ContentLeft options noCopy onClick={btnExplored}>
              <SearchOutlinedIcon />
              <Label options>Explored</Label>
            </ContentLeft>
            <ContentLeft options noCopy onClick={btnMessage}>
              <EmailOutlinedIcon />
              <Label options>Message</Label>
            </ContentLeft>
            <ContentLeft options noCopy onClick={btnDirect}>
              <SensorsOutlinedIcon />
              <Label options>Direct</Label>
            </ContentLeft>
            <ContentLeft options noCopy onClick={btnSetting}>
              <SettingsOutlinedIcon />
              <Label options>Settings</Label>
            </ContentLeft>
          </Content>
          <Hr options />
          <ContentLeft options noCopy onClick={btnLogout}>
            <LoginOutlinedIcon />
            <Label options>Logout</Label>
          </ContentLeft>
        </Content>
        <Content main>
          <Content head>
            <ContentLeft search>
              <SearchOutlinedIcon sx={{fontSize: 30, color:"#808eff"}}/>
              <Input search type="text" placeholder="Search..."/>
            </ContentLeft>
            <Button addPhoto>
              <AddBoxOutlinedIcon sx={{marginRight:"5px"}}/>
              <Label>Add Photo</Label>
            </Button>
          </Content>
          {feed ? <Feed /> : null}
          {explored ? <Explored /> : null}
          {message ? <Message /> : null}
          {direct ? <Direct /> : null}
          {setting ? <Setting /> : null}
        </Content>
 
Search...
Feed     </Content>
    </ThemeProvider>
  );
}

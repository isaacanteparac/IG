import React, { useContext } from "react";

//icons
import {createTheme, ThemeProvider } from "@mui/material/styles";
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import { Content, ContentColumnCenter, ContentCenter, ContentLeft } from "../../styles/div";
import { Label } from "../../styles/letter";
import { Img, ContentImg } from "../../styles/image";

import { AuthContext } from "../../auth/Context";



export default function Navigation() {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const mdTheme = createTheme();
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
            <ContentColumnCenter noCopy inf_follower>
              <Label blod>50</Label>
              <Label trasnparent>Followers</Label>
            </ContentColumnCenter>
            <ContentColumnCenter noCopy inf_follower>
              <Label blod>50</Label>
              <Label trasnparent>Followings</Label>
            </ContentColumnCenter>
          </ContentCenter>
        </Content>
        <Content>
          <ContentLeft options noCopy>
            <AutoAwesomeMosaicOutlinedIcon/>
            <Label options>Feed</Label>
          </ContentLeft>
          <ContentLeft options noCopy>
            <SearchOutlinedIcon/>
            <Label options>Explored</Label>
          </ContentLeft>
          <ContentLeft options noCopy>
            <EmailOutlinedIcon/>
            <Label options>Message</Label>
          </ContentLeft>
          <ContentLeft options noCopy>
            <SensorsOutlinedIcon/>
            <Label options>Direct</Label>
          </ContentLeft>
          <ContentLeft options noCopy>
            <SettingsOutlinedIcon/>
            <Label options>Settings</Label>
          </ContentLeft>
          <ContentLeft options noCopy>
            <LoginOutlinedIcon/>
            <Label options>Logout</Label>
          </ContentLeft>
        </Content>
      </Content>
      <Content main>main</Content>
    </Content>
    </ThemeProvider>


  );
}

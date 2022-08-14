import React, { useState, useEffect } from "react";

import { Content, ContentColumn } from "../../styles/div";
import { Label } from "../../styles/letter";

import History from "../feed/History";
import CardFeed from "../feed/CardFeed";


export default function Feed() {
  const [dataPost, setDataPost] = useState([]);
  const [dataHistory, setDataHistiry] = useState([]);

  const ims = "https://mussica.info/wp-content/uploads/2021/05/Billie-Eilish-cover.jpeg";
  const dataMount = async () => {
    setDataPost();
    setDataHistiry();
  };

  return (
    <ContentColumn feed>
      <Content>
        <Content>
            <Label subTitle>History</Label>
        </Content>
        <Content history>
            <History image={ims}/>
            <History image={ims}/>
            <History image={ims}/>
            <History image={ims}/>
      
        </Content>
      </Content>    
      <Content>
        <Content>
            <Label subTitle>Feed</Label>
        </Content>
        <Content posts>
            <CardFeed image={ims} nickname="billieeilish"/>
            <CardFeed image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg" nickname="billieeilish"/>
            <CardFeed image={ims} nickname="billieeilish"/>
     
            

            <CardFeed image={ims} nickname="billieeilish"/>
            <CardFeed image={ims} nickname="billieeilish"/>
            <CardFeed image={ims} nickname="billieeilish"/>

            
      
        </Content>
      </Content>   

    </ContentColumn>
  );
}

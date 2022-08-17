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
            <CardFeed image={ims} nickname="billieeilish" idPost={1}/>
            <CardFeed image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg" nickname="billieeilish"/>
            <CardFeed image={ims} nickname="billieeilish"/>
     
            

            <CardFeed image="https://ca-times.brightspotcdn.com/dims4/default/b9de188/2147483647/strip/true/crop/4394x3110+0+0/resize/840x595!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8c%2F88%2F848b8f381258265c59d22a36ff8f%2F913c85d873314a96a7beb82a9cafaa24" nickname="billieeilish"/>
            <CardFeed image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BillieEilishO2160622_%2819_of_45%29_%2852153214339%29_%28cropped_2%29.jpg/220px-BillieEilishO2160622_%2819_of_45%29_%2852153214339%29_%28cropped_2%29.jpg" nickname="billieeilish"/>
            <CardFeed image={ims} nickname="billieeilish"/>

            
      
        </Content>
      </Content>   

    </ContentColumn>
  );
}

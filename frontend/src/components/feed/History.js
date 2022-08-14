import React from 'react'

import { ContentImg, Img } from "../../styles/image";


export default function History(props) {

    return (
      <ContentImg history>
        <Img history src={props.image}/>
      </ContentImg>
    )

}

import React from "react";
import Nav from "../../component/nav/Nav";
import ChatBody from "../../component/chatBody/ChatBody";

export default function Chat(){

    return(
        // <div style={{ display : 'flex', justifyContent : 'center', alignItems : 'center' }}>WelCome to Chat</div>
      <div className='main'>
          {/*<Nav />*/}
          <ChatBody />
      </div>

    )
}
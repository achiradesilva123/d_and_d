import React, {Component, useEffect, useState} from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

export default function ChatBody ()  {

const [user,setUser] = useState(null);

const  handleChatList = ( val ) => {
    setUser(val)
  };

useEffect( () => {
  console.log("user",user);
},[user])

    return (
      <div className="main__chatbody">
        <ChatList onChange = {handleChatList} />
        <ChatContent data ={user} />
        <UserProfile data ={user} />
      </div>
    );

}

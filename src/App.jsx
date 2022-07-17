import React from 'react';
import './App.css';
import Feed from './components/Feed.jsx';
import MessagePanel from './components/MessagePanel';
import { useState } from 'react';

//alert("TRIGGER WARNING");

//TODO write code here


function App() {

  const [index, setIndex] = useState(0)

  let messageArray = [
    {
      message: "V: City lights and starry nights! Here's to evermore adventure.",
      sender: "V",
      type: "Feed"
    } , {
      message: "V: HEY YALL! Just wanted to say you guys are the best and that we need to hang out more!",
      sender:"from-V",
      type: "GC"
    }, {
      message: "Hey, I miss you.",
      sender:"from-them",
      type: "DM"
    }, 
    
    {
      text: "M: aw totally, I had so much fun :)",
      sender:"from-M",
      type: "GC"
    },
    {
      message: "P: yea! I wanna go to the beach next time!",
      sender:"from-P",
      type: "GC"

    }, 
    {
      message: "V: Anyways, I'm off to bed. Sleep well you guys <3",
      sender: "from-V",
      type: "GC"
    },
    {
      message: "M:  night x",
      sender: "from-M",
      type: "GC"
    },
    {
      message: "P: G'night!",
      sender: "from-P",
      type: "GC"
    },
    {
      message: "Peace out.",
      sender: "Sleep well.",
      type: "GCoptions"
    },
    {
      message: "Anonymous: michelle's bf is totally sleeping around. downright flirting with a brunette today",
      sender: "Anon",
      type: "Feed"
    },
    {
      message: "Uh",
      sender: "from-P",
      type: "GC"
    },
    {
      message: "Have you seen the post from last night?",
      sender: "from-P",
      type: "GC"
    },
    {
      message: "Oh my god Michelle I'm so sorry",
      sender: "from-A",
      type: "GC"
    },
    {
      message: "THAT B****",
      sender: "from-M",
      type: "GC"
    },
    {
      message: "Huh?",
      sender: "from-A",
      type: "GC"
    },
    {
      message: "alison is such a s***",
      sender: "from-M",
      type: "GC"
    },
    {
      message: "she slept with my boyfriend",
      sender: "from-A",
      type: "GC"
    },
    {
      message: "Are you serious? F*** that chick!",
      sender: "from-M",
      type: "GC"
    },
    {
      message: "Um, are we sure it was about her?",
      sender: "What a sad b****.",
      type: "GCoptions"
    },
    {
      message: "Did you do it?",
      sender: "What's wrong with you?",
      type: "DMoptions"
    },
    {
      message: "",
      sender: "",
      type: ""
    },
    {
      message: "",
      sender: "",
      type: ""
    },
    {
      message: "",
      sender: "",
      type: ""
    }
      
  ]
  
  const [DM_messages, setDM_messages] = useState([]);

  const [groupMessages, setGroupMessages] = useState([

  ])

  const [feedContent, setFeedContent] = useState([])

  const newDM = ( text, origin ) => {
    //origin has to be either "from-me" or "from-them"
    if (origin = "from-me") {
      setDM_options([])
    }
    let new_DM_messages = [...DM_messages]
    new_DM_messages.push({ text: text, origin: origin })
    setDM_messages(new_DM_messages)
  }
//these functions can be called for either new messages triggered by the user or new messages triggered by the system.
  const newGroupMessage = ( text, origin ) => {
    if (origin == "from-me") {
      setGC_options([])
    }
    
    let newGroupMessages = [...groupMessages]
    newGroupMessages.push({ text: text, origin: origin })
    setGroupMessages(newGroupMessages)
  }

  const newFeedItem = ( text, poster ) => {
    
    let newFeedContent = [...feedContent]
    newFeedContent.push({ tag: text, poster: poster})
    setFeedContent(newFeedContent)
  }

  const nextPhase = () => {
    
    let newIndex = index + 1
    setIndex(newIndex)
    if (messageArray[newIndex].type == "DM") {
      newDM(messageArray[newIndex].message, "from-them")
    } else if (messageArray[newIndex].type == "GC") {
      newGroupMessage(messageArray[newIndex].message, "from-them")
    } else if (messageArray[newIndex].type == "Feed") {
      newFeedItem(messageArray[newIndex].message, messageArray[newIndex].sender)
    } else if (messageArray[newIndex].type == "DMoptions"){
      
      let options = [messageArray[newIndex].message, messageArray[newIndex].sender]
      setDM_options(options)
    } else if ((messageArray[newIndex].type == "GCoptions")) {

      let options = [messageArray[newIndex].message, messageArray[newIndex].sender]
      setGC_options(options)
    }
  }

  //these are what you pass to a messagepanel as options for the buttons: an empy array means no options so it displays the meaningless text bar. An array with options means it will display buttons.
  
  const [ GC_options, setGC_options] = useState([])
  const [ DM_options, setDM_options] = useState([])
  
  return (
    <main>
      <div className="header">
        <h1 className="title">SocialLine.com</h1>
      </div>
      <div className="nextButtonPanel">
        <button className="nextButton" onClick={nextPhase}>NEXT</button>
      </div>
      <div className="mainApp">
        <div className="messagingPanel">
          <MessagePanel messages={groupMessages} title="Group Chat" options={GC_options} onSelect={newGroupMessage}/>
          <MessagePanel messages={DM_messages} title="DM" options={DM_options} onSelect={newDM}/>
        </div>
        <Feed content={feedContent}/>
      </div>
    </main>
  );
}

export default App;
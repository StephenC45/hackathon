
const MessagePanel = ({ messages, title, options, onSelect }) => {
  console.log("options are")
  console.log(options)
  let isEmpty = false
  if (options.length == 0) {
    isEmpty = true
  } 
  
  const returnInputBar = () => {
    if (isEmpty) {
      return(
        <div className="textInputBar">
          <div className="textSection">
          </div>
          <div className="sendButton"/>
        </div>
      )
    } else {
      console.log(onSelect)
      return(
      <div className="buttonInputBar">
        {options.map((option) => (
          <button 
            className="optionButton" 
            onClick={() => onSelect(option, "from-me")}>
          {option}
          </button>
        ))}
      </div>
      )
    }
  }
  
return (
  <div className="messagePanel">
    <div className="titlePanel">
      <h1>{title}</h1>
    </div>
    <div className="messageScroll">
      {messages.map((message) => (
       <div className="message">
        <p className={message.origin}>{message.text}</p>
       </div>
       ))}
    </div>
    <div className="inputBar">
      {returnInputBar()}
    </div>
  </div>
)
}


export default MessagePanel;

const FeedItem = ({ item }) => {
  console.log(item.type)
  
  return(
    <div className="FeedItem">
      <h2 className="posterName">{item.poster}</h2>
      <p>{item.tag}</p>
    </div>
  )
}

export default FeedItem;
import FeedItem from './FeedItem.jsx';

const Feed = ({ content }) => {

return (
  <div className="feedPanel">
    <div className="titlePanel">
      <h1>Feed</h1>
    </div>
    <div className="feedScroll">
      {content.map((item) => (
        <FeedItem item={item}/>
      ))}
    </div>
  </div>
)
}

export default Feed;
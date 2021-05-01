const StoryCard = ({ story }) => {
  return (
    <div class="story">
      <div class="story-header">
        <div class="avatar">
          <img src={story["avatar"]} />
        </div>
        <div class="author-details-container">
          <span class="author-name">{story["name"]}</span>
          <span class="author-bio">{story["bio"]}</span>
        </div>
      </div>
      <div class="story-body">
        <div class="question-container">
          <h3 class="question">{story["question"]}</h3>
        </div>
        <div class="answer-container">
          <p>{story["answer"]}</p>
        </div>
      </div>
      <div class="story-footer">
        <div class="left-footer">
          <Upvote initialCount={story["upvote_count"]} />
        </div>
        <div class="right-footer">
          <div class="share">
            <i class="fa fa-share-alt"></i>
            <span class="icon-value">{story["share_count"]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Upvote = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div class="vote">
      <i class="fa fa-arrow-circle-up" onClick={() => setCount(count + 1)}></i>
      <span class="icon-value">{count}</span>
      <i
        class="fa fa-arrow-circle-down"
        onClick={() => setCount(count - 1)}
      ></i>
    </div>
  );
};

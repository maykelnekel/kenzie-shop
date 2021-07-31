const Button = ({ content, onClick, type = "" }) => {
  return (
    <div>
      <button type={type} onClick={() => onClick()}>
        {content}
      </button>
    </div>
  );
};
export default Button;

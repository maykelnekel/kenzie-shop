const Button = ({ content, onclick, type = "" }) => {
  return (
    <div>
      <button type={type} onClick={() => onclick()}>
        {content}
      </button>
    </div>
  );
};
export default Button;

const Button = ({ content, onclick, type = "" }) => {
  return (
    <div>
      <button type={type} onclick={() => onclick()}>
        {content}
      </button>
    </div>
  );
};
export default Button;

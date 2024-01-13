const CustomButton = ({ title, containerStyles }) => {
  return (
    <button type="button" className={`custom-btn ${containerStyles}`}>
      {title}
    </button>
  );
};

export default CustomButton;

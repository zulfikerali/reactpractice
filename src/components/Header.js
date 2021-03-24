import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, show }) => {
  const add = () => {
    alert("add");
  };
  const newadd = () => {
    alert("newadd");
  };
  return (
    <>
      <br />
      <header className="d-flex justify-content-between">
        <h5 className="text-danger">{title}</h5>
        <Button text={show ? "Close" : "Add New"} color={show ? "btn btn-danger btn-sm" : "btn btn-info btn-sm"} onClick={onShow} />
        {/* <Button
          text="Add New 2"
          color="btn btn-danger btn-sm"
          onClick={newadd}
        /> */}
      </header>
    </>
  );
};
Header.defaultProps = {
  title: "Task Manager",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

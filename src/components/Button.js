import PropTypes from 'prop-types';
const Button = ({ text, color, onClick }) => {

    return <button onClick={onClick} className={color}>{text}</button>
}
Button.defaultProps = {
    color: "btn btn-primary btn-sm"
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button

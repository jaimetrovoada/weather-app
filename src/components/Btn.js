import PropTypes from "prop-types";

const Btn = ({ text, onClick}) => {
    return (
        <div className="btn" onClick={onClick}>{text}</div>
    )

}

Btn.propTypes = {
    onClick: PropTypes.func,
}

export default Btn

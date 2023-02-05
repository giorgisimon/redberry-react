import './LeftSideCard.css';

function LeftSideCard(props){
    const classes = "left_side_card " + props.className;

    return <div className={classes}>{props.children}</div>;
}
export default LeftSideCard;
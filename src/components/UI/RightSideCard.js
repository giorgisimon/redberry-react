import './RightSideCard.css';

function RightSideCard(props){
    const classes = "right_side_card " + props.className;

    return <div className={classes}>{props.children}</div>;
}
export default RightSideCard;
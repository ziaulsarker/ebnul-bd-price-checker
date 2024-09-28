"use client";
import "./fifth.css";

function Fifth(props) {
    return(
        <div className="container5" style={{display: props.isLeftAligned ? "flex" : "row",}}>
            <div className="text-box">
                <p className="text1">Loreum op</p>
                <p className="text2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur.</p>
                </div>
            <div className="containe">
    <div className="row">
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
    </div>
    <div className="row">
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
    </div>
    <div className="row">
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
        <div className={props.isLeftAligned ? "hexagon-left" : "hexagon"}></div>
    </div>
        </div>
        </div>
    )
}

export default Fifth
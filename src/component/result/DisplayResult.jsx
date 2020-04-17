import React from "react";

import classes from "./Result.module.css";
import love from "../../assets/love.gif";
import hbreak from "../../assets/break.gif";

const DisplayResult = ({
    result: { fname, sname, percentage, result: message },
}) => {
    return (
        <div className={classes.Result}>
            <h4>{fname}</h4>
            <h4>{sname}</h4>
            <div className={classes.image}>
                {percentage > 70 ? (
                    <img src={love} alt="Love" />
                ) : (
                    <img src={hbreak} alt="heart break" />
                )}
            </div>
            <h5>{percentage}%</h5>
            <h6>{message}</h6>
        </div>
    );
};

export default DisplayResult;

/**
 * Author: Quyen Vo
 * File name: HoverRating.js
 * Last Modified Date: 15/2/2021
 * Purpose: This component is using Material UI to display the star rating that user will give for clinic
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Good",
  4: "Great",
  5: "Excellent",
};

const useStyles = makeStyles({
  root: {
    width: 400,
    display: "flex",
    alignItems: "center",
  },
});

const HoverRating = ({ rating, setRating }) => {
  // This component is in ReviewForm from componnets/clinicDetail/ReviewForm.js
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={rating}
        precision={1}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {rating !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>
      )}
    </div>
  );
};
export default HoverRating;

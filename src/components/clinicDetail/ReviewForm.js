/**
 * Author: Quyen Vo
 * File name: ReviewForm.js
 * Last Modified Date: 14/2/2021
 * Purpose: This component is used to let user write a review, give a star rating for a clinic.
 */
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import HoverRating from "./HoverRating";

/**
 * user can write and rate for a clinic based on 1-5 star.
 *
 * @param {String} reviewText The String representing the content of reviews that the user write for clinics
 * @param {Number} rating The Number representing the star that user give for a clinic
 * @param {Function} setRating The Function to change the value of rating
 * @param {EventHandler} handleInputReviewChange The Event handler to handle input of review when user write on.
 * @param {EventHandler} handleSubmitReview the Event handler to handle isubmitting of review input
 */
const ReviewForm = ({
  reviewText,
  rating,
  setRating,
  handleInputReviewChange,
  handleSubmitReview,
}) => {
  return (
    <Container fluid>
      <HoverRating rating={rating} setRating={setRating} />
      <Form onSubmit={handleSubmitReview}>
        <Form.Group as={Row}>
          <Form.Label htmlFor="review" column sm="2">
            Review:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              id="review"
              type="text"
              value={reviewText}
              onChange={handleInputReviewChange}
            />
          </Col>

          <Button type="submit" disabled={!reviewText}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default ReviewForm;

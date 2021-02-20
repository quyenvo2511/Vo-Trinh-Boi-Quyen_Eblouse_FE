/**
 * Author: Quyen Vo
 * File name: ClinicReview.js
 * Last Modified Date: 15/2/2021
 * Purpose:   This component is used to display all reviews of a Clinic.
 */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReviewForm from "./ReviewForm";

/**
 * The reviews of each users for a Clinic
 *
 * @param {Object} clinic The Object that conataining all data from server of a clinic
 * @param {String} reviewText The String representing the content of reviews that the user write for clinics
 * @param {Number} rating the Number representing the star that user give for a clinic
 * @param {Function} setRating The Function to change the value of rating
 * @param {EventHandler} handleInputReviewChange The Event handler to handle input of review when user write on.
 * @param {EventHandler} handleSubmitReview the Event handler to handle isubmitting of review input
 */
const ClinicReview = ({
  // This component is in ClinicDetailPage from components/pages/ClinicDetailPage.js
  clinic,
  reviewText,
  rating,
  setRating,
  handleInputReviewChange,
  handleSubmitReview,
}) => {
  const { avgRating, reviews } = clinic;

  const [reviewsNum, setReviewsNum] = useState(4);

  // isAuthenticated is calling from authActions to check that user already loged in to show review input
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  /**
   * ReviewCard component is used to display content of review that users wrote for Clinic.
   *
   * @param {Object} review The Object containing data reviews from server of a clinic
   */
  const ReviewCard = ({ review }) => {
    return (
      <div className="reviews-card">
        <div
          className="user-info"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <div className="avatar-wrapper">
            <img
              src={review.user.avatarUrl}
              alt="user avatar"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="user-detail" style={{ padding: "10px 20px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "1.1em",
                fontWeight: "bold",
              }}
            >
              {`${review.user.name}`}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.8em",
                color: "grey",
                fontStyle: "italic",
              }}
            >
              {/* display date into a string */}
              {new Date().toLocaleDateString(undefined, {
                month: "long", // "long" return eg: January instead of Jan
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="review-content">
          <p style={{ padding: "10px 0px" }}>
            <i style={{ color: "#fdb827" }} className="fas fa-star"></i>
            {" " + review.rating}
          </p>
          <p
            style={{
              fontSize: "0.9em",
              fontWeight: 200,
            }}
          >
            {review.content}
          </p>
        </div>
      </div>
    );
  };
  /**
   * getReviewCards is a component used to limit the reviews that shows on UI of app
   *
   * @param {Number} reviewsNum The Number that limit of reviews
   */
  const getReviewCards = (reviewsNum = 4) => {
    return reviews
      .slice(0, reviewsNum) // just pick up default of 4 reviews from reviews database
      .map((review, index) => <ReviewCard key={index} review={review} />);
  };

  // handleShowMore display all reviews from reviews database
  const handleShowMore = () => {
    if (reviewsNum < reviews.length) {
      setReviewsNum(reviewsNum + 4); // everytime user click on showmore button
      // user can see another 4 reviews until all the reviews of a Clinic are shown
    }
  };

  return (
    <Container>
      <div className="clinic-reviews-wrapper">
        <div className="header" style={{ paddingBottom: "50px" }}>
          <h2>
            <i
              style={{ color: "#fdb827", marginRight: "0.5em" }}
              className="fas fa-star"
            ></i>
            {`${Math.round(avgRating * 10) / 10} - Patient Reviews`}
          </h2>
        </div>
        <div className="reviews-detail">{getReviewCards(reviewsNum)}</div>
        {reviewsNum < reviews.length ? (
          <button onClick={() => handleShowMore()}>Show More</button>
        ) : null}
      </div>
      <div className="clinic-review-input">
        {isAuthenticated && (
          <ReviewForm
            reviewText={reviewText}
            rating={rating}
            setRating={setRating}
            handleInputReviewChange={handleInputReviewChange}
            handleSubmitReview={handleSubmitReview}
          />
        )}
      </div>
    </Container>
  );
};
export default ClinicReview;

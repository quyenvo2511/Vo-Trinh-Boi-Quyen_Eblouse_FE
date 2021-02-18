/**
 * Author: Quyen Vo
 * File name: HomePage.js
 * Last Modified Date: 10/2/2021
 * Purpose: This component display UI of Homepage
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { MultiItemsCarousel } from "../components/Carousel";

import reviewsActions from "../redux/actions/reviews.actions";

import "../style/HomePage.css";
import screen from "../images/screen.png";
import ReviewCard from "../components/ReviewCard";

const HomePage = () => {
  const reviews = useSelector((states) => states.reviews.reviews);
  const isLoading = useSelector((states) => states.reviews.isLoading);
  const user = useSelector((state) => state.auth.user);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewsActions.getRandomReviews());
  }, [dispatch]);
  // this useEffect below will re direct to admin page if current user is an Admin
  useEffect(() => {
    if (user && user.isAdmin) {
      history.replace("/admin");
    }
  }, [user]);
  const getReviewCardsList = () => {
    // this function will give data of each random review into a ReviewCard component
    const cards = reviews.slice(0, 10).map((review) => (
      <ReviewCard
        avatar={review.user.avatarUrl}
        clinicName={review.clinic.name}
        address={review.clinic.address}
        description={"Description Here"}
        comment={review.content}
        rating={review.rating}
        key={review._id}
        // when click on one card, the  page will move to Clinic Detail page
        onClick={() => {
          history.push(`/clinic/${review.clinic._id}`);
        }}
      />
    ));

    return cards;
  };
  // This return below belongs to HomePage()
  return (
    <div className="wrapper">
      <section className="slogan">
        <h1 className="feel">Feeling mehh? Find a doctor.</h1>
      </section>
      <section className="reviews-carousel">
        {isLoading ? (
          <LoadingSpinner animation="border" color="danger" />
        ) : (
          <MultiItemsCarousel
            items={getReviewCardsList()}
            offset={30}
            slidesNum={1}
          />
        )}
      </section>
      {/* second paragraph */}
      <section id="between2">
        <div className="container2">
          <div className="hinh-screen">
            <img src={screen} alt="iphone-img" className="iphone-img" />
          </div>
          <div className="lis-right">
            <h2 className="get-app">Get the Eblouse app.</h2>
            <ul className="list-one">
              <li className="list-1">Find nearly doctors in your area</li>
              <li className="list-1">Browse real patient reviews</li>
              <li className="list-1">Book appointment with a tap</li>
            </ul>
            <button id="get-app">
              GET <span className="span1">EBLOUSE</span> FREE
            </button>
          </div>
        </div>
      </section>
      {/* pink paragraph */}
      <section id="between3">
        <div className="container3">
          <div className="h2-list">
            <h2 className="are-you-doctor">Are you a five-star clinic?</h2>
            <h2 className="bet3">
              List your practice to reach millions of patients
            </h2>
            <ul className="list-two">
              <li className="list-2">Attract and engage new patients</li>
              <li className="list-2">
                Build and strengthen your online reputation
              </li>
              <li className="list-2">
                Deliver a prenium experience patients love
              </li>
            </ul>
            <button className="list-practice" placeholder="">
              List your practice on Eblouse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

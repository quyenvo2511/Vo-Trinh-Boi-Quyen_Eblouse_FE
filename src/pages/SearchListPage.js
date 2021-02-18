/**
 * Author: Quyen Vo
 * File name: SearchListPage.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component is showing list of clinic which have specializations same as query
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "../style/MultiItemsCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "../components/LoadingSpinner";
import "../style/SearchListPage.css";
import { Container, Row, Col } from "react-bootstrap";

import clinicsActions from "../redux/actions/clinics.actions";
import Card from "../components/Card";

const SearchListPage = () => {
  const listClinic = useSelector((state) => state.clinics.listClinic);
  const isLoading = useSelector((state) => state.clinics.isLoading);

  const dispatch = useDispatch();
  const params = useParams();
  const query = params.query;

  useEffect(() => {
    dispatch(clinicsActions.getSearchCategory(query));
  }, [dispatch]);

  return (
    <Container fluid>
      {isLoading ? (
        <LoadingSpinner animation="border" color="danger" />
      ) : (
        <Row>
          <Col md={3}></Col>
          <Col md={7}>
            <div className="search-list">
              <section className="info-updated-wrapper">
                <div className="info-updated">
                  <p>
                    There are <span>{listClinic.length}</span> clinics nearby
                    you
                  </p>
                </div>
              </section>
              <section className="list-of-clinics">
                <div className="first-item">
                  {listClinic.map((clinic) => (
                    <Card clinic={clinic} images={clinic.avaUrl} />
                  ))}
                  <div className="text-below"></div>
                </div>
              </section>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      )}
    </Container>
  );
};

export default SearchListPage;

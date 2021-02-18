import React from "react";
import { Switch, Route } from "react-router-dom";
import { PublicNavBar } from "../components/navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ClinicDetailPage from "../pages/ClinicDetailPage";

import PrivateRoute from "./PrivateRoute";
import SearchListPage from "../pages/SearchListPage";
import ProfilePage from "../pages/User/ProfilePage";

import "../style/main.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const PublicLayout = () => {
  const specializations = useSelector(
    (state) => state.specializations.specializations
  );

  return (
    <>
      <PublicNavBar specializations={specializations} />
      <Container style={{ padding: 0 }} fluid>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/clinic/:id" component={ClinicDetailPage} />
          <Route exact path="/search/:query" component={SearchListPage} />
          <PrivateRoute exact path="/information/:id" component={ProfilePage} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default PublicLayout;

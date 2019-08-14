import React, { Fragment } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function LocationCard(props) {
  return (
    <Fragment>
      <Card className="location-card">
        <CardBody>
          <CardTitle>Name: {props.data.name}</CardTitle>
          <CardSubtitle>Type: {props.data.type}</CardSubtitle>
          <CardText>Dimension: {props.data.dimension}</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function LocationCard(props) {
  console.log("Location Props", props);
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.data.name}</CardTitle>
          <CardSubtitle>Type: {props.data.type}</CardSubtitle>
          <CardText>Dimension: {props.data.dimension}</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
}

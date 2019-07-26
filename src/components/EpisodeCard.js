import React, { Fragment } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function EpisodeCard(props) {
  console.log("DATA", props.data);
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle>Episode Name: {props.data.name}</CardTitle>
          <CardSubtitle>Episode: {props.data.episode}</CardSubtitle>
          <CardText>Date: {props.data.air_date}</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
}

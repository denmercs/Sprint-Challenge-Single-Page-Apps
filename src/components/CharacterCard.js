import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function CharacterCard(props) {
  console.log("DATA", props.data);
  return (
    <Fragment>
      <Card>
        <CardImg src={props.data.image} alt="Characters" />
        <CardBody>
          <CardTitle>Name: {props.data.name}</CardTitle>
          <CardSubtitle>Gender: {props.data.gender}</CardSubtitle>
          <CardText>Status: {props.data.status}</CardText>
          <CardText>Species: {props.data.species}</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
}

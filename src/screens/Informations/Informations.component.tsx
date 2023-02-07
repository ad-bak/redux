import React, { FormEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Card, Icon } from "semantic-ui-react";
import { Actions } from "../../redux/actions";
import "./Informations.styles.css";
import { userSelector } from "../../redux/selector";
import { AppState } from "../../redux/store";

export const Informations: FunctionComponent = () => {
  const state = useSelector((state: AppState) => userSelector(state));
  const dispatch = useDispatch();

  const handleChange =
    (name: string) =>
    ({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
      dispatch(Actions.update({ ...state, [name]: value }));
    };

  return (
    <Container className="appContainer">
      <Card>
        <Card.Content>
          <Link to="/" className="appBack">
            <Icon name="arrow left" />
            Retour
          </Link>
          <Form>
            <Form.Input
              fluid
              label="Nom"
              placeholder="Nom"
              onChange={handleChange("name")}
            />
            <Form.Input
              fluid
              label="Date de naissance"
              placeholder="Date de naissance"
              onChange={handleChange("birthday")}
            />
            <Form.Input
              fluid
              label="Description"
              placeholder="Description"
              onChange={handleChange("description")}
            />
            <button className="validate-btn">Valider</button>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

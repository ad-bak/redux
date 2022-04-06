import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Card, Image, Button, Icon } from 'semantic-ui-react'
import { userSelector } from '../../redux/selector'
import { AppState } from '../../redux/store'
import './Home.styles.css'

export const Home: FunctionComponent = () => {
  const { name, birthday, description } = useSelector((state: AppState) => userSelector(state))
  return (
    <Container className="appContainer">
      <Card>
        <Image src='https://reqres.in/img/faces/4-image.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{birthday}</span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to="informations">
            <Button animated>
              <Button.Content visible>Modifier</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </Container>
    
  )
}

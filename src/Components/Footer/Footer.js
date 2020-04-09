import React from 'react'
import { Container , Header , Icon} from 'semantic-ui-react'

const Footer = () => {

    return (
        <Container   fluid style={{ backgroundColor : '#1A1A19' , paddingTop : '20px'}} >
          <div style={{margin : '0 auto' , textAlign : 'center'}}>
          <Header as='h2' icon  inverted>
    <Icon name='hospital' />
    <Header.Content>
      COVID 19
      <Header.Subheader>Live Updates</Header.Subheader>
    </Header.Content>
  </Header>
             </div>
        </Container>
    )
}


export default Footer
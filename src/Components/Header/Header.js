import React from 'react'
import { Container , Image  } from 'semantic-ui-react'

const Header = () => {
    return (
        <Container  style={{width : '100%' , backgroundColor : '#E7E7E7'}}>
        
            <Image  verticalAlign= 'middle' size="medium" src="./images/HeaderLogo.jpg" style={{margin : '0 auto' , display : 'block'}} />
        </Container>
    )
}


export default Header
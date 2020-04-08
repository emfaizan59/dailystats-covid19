import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import './SearchBar.css'
class SearchBar extends React.Component {
    render(){
        return(
            <Container fluid>
                <div className='searchBar'>
                <Grid centered={true}>
                    <Grid.Row>
                <Grid.Column width={8} >
                <input placeholder="Search Countries"  style={{width:'100%' , height:'55px' , borderRadius :'10px' , 
                backgroundColor:'#383834' , 
               border : '1px solid #595954' , 
               marginTop : '10px',
               color : 'white' , 
               outline : 'none',
               paddingLeft : '10px'
            }}  />
                </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </Container>
        )
    }
}


export default SearchBar
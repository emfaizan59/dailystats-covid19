import React from 'react'
import {Container , Grid, Card , Image ,Header, Icon , Segment , Placeholder} from 'semantic-ui-react'
import './CountryList.css'
let arrayList = []
class CountryList extends React.Component {
    state = {
            load : true
    }
    

    componentDidMount = () => {
        this.fetchItem("https://corona.lmao.ninja/countries")

       
    }

    fetchItem = (apiURL) => {
        fetch(apiURL)
        .then(result => result.json())
        .then(result => {
            // console.log(result.length)
           for(var i = 0 ; i < result.length ; i++)
           {
            arrayList[i] = {countryName : result[i].country ,
                countryFlag : result[i].countryInfo.flag , 
                update : this.UTCtoTime(result[i].updated)  , 
                totalCases : result[i].cases , 
                todayCases : result[i].todayCases ,
                totalDeaths : result[i].deaths ,
                todayDeaths : result[i].todayDeaths , 
                recovered : result[i].recovered , 
                active : result[i].active , 
                critical : result[i].critical , 
                totalTests :result[i].tests , 
                }
           } 

           this.setState({ load : false})
        })
    }
    

    UTCtoTime = (utcTime) => {
        var dateFormat = require('dateformat');
        var date = new Date(utcTime).toLocaleDateString("en-US")
        // expected output "8/30/2017"  
        var dateLocal =  dateFormat(date, "dddd, mmmm dS");
        // console.log(dateLocal);

        var time = new Date(utcTime).toLocaleTimeString("en-US")
        // expected output "3:19:27 PM"
        // console.log(time)
        var dateTime  = dateLocal + " - "+time
        // console.log(dateLocal + " - "+time)

        return dateTime
        
      }



    render(){
        return(

            <Container style={{marginTop : '50px'}}>
  {this.state.load ?  
<Grid columns={3} stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
  </Grid>
:

<Card.Group itemsPerRow={3}>

{arrayList.map( (element , i) => (
    <Card key={i}>
        <Image src={element.countryFlag || '/images/caouselBG.jpg'} style={{height : '170px'}}  />
        <Card.Content>
        <Card.Header style={{fontSize : '25px'}} >{element.countryName}</Card.Header>
        <Card.Meta>
<span className='date'>Last Update: {element.update}</span>
        </Card.Meta>
        <div className="totalCases">
            <h2>Total Cases</h2>
            <h2 style={{color:'#E02D2F'}}>{element.totalCases || 1231233}</h2>
        </div>
     <div>
        <Grid padded={true}>
            <Grid.Row >
                <Grid.Column width={8}>
    <Segment color="olive" raised ={true} style={{marginTop:'-10px' , width : '100%' }} compact={true} size="mini"  >
        <div className="twoColDiv">
            <h5>Today Cases</h5>
            <h5>{element.todayCases || 1231233}</h5>
        </div>
        </Segment>      
                </Grid.Column>
                <Grid.Column width={8}>
      <Segment color="green" raised ={true} style={{marginTop:'-10px' , width : '100%' }} compact={true} size="mini"  >
        <div className="twoColDiv">
            <h5>Total Active</h5>
            <h5>{element.active || 1231233}</h5>
        </div>      
        </Segment>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row centered={true} >
                <Grid.Column width={8}>
<Segment color="red"  raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
                
        <div className="twoColDiv">
            <h5>Total Deaths</h5>
            <h5>{element.totalDeaths || 1231233}</h5>
        </div>  
        </Segment>    
                </Grid.Column>
                <Grid.Column width={8}>
<Segment color="red" raised ={true} style={{marginTop:'-10px' , width : '100%'}} size="mini"  >
                    
        <div className="twoColDiv">
            <h5>Today Death</h5>
            <h5>{element.todayDeaths || 1231233}</h5>
        </div>      
        </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Grid.Column width={8}>
<Segment color="teal" raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
                
        <div className="twoColDiv">
            <h5>Recovered</h5>
            <h5>{element.recovered || 1231233}</h5>
        </div>      
</Segment>
                </Grid.Column>
                <Grid.Column width={8}>
<Segment color="red" raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
          
        <div className="twoColDiv">
            <h5>Critical</h5>
            <h5>{element.critical || 1231233}</h5>
        </div>      
</Segment>
                </Grid.Column>

            </Grid.Row>


            <Grid.Row centered={true}>
                <Grid.Column width={16}>
<Segment color="blue" raised ={true} style={{marginTop:'-10px', width : '100%' }} compact={true} size="mini"  >    
        <div className="twoColDiv">
            <h5>Total Tests Conducted</h5>
            <h5>{element.totalTests || 1231233}</h5>
        </div>      
</Segment>
                </Grid.Column>
             
            </Grid.Row>


        </Grid>
        </div>
        </Card.Content>
    </Card>

)
)
}

   </Card.Group>

}
</Container>
        )
    }
}


export default CountryList
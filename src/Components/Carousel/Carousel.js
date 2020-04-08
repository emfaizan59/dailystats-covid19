import React from 'react'
import { Container, Header, Grid, GridColumn , Loader } from 'semantic-ui-react'
import './Carousel.css'
class Carousel extends React.Component {
 state = {
     update : '' ,
     totalCases : '' ,
     todayCases : '',
     totalDeaths : '' ,
     todayDeaths : '',
     recovered : '' , 
     active : '' ,
     critical : '' ,
     casesPerOneMillion : '' ,
     deathsPerOneMillion : '' ,
     totalTests : '',
     testsPerOneMillion : '',
     affectedCountries : '' ,
     load : true
 }
 
    componentDidMount = () => {

          fetch("https://corona.lmao.ninja/all")
            .then(result => result.json())
            .then(result => 
                {
    
                    this.setState({
                        update : this.UTCtoTime(result.updated) , 
                        totalCases : result.cases , 
                        todayCases : result.todayCases , 
                        totalDeaths : result.deaths , 
                        todayDeaths : result.todayDeaths ,
                        recovered : result.recovered , 
                        active : result.active , 
                        critical : result.critical , 
                        casesPerOneMillion : result.casesPerOneMillion , 
                        deathsPerOneMillion : result.deathsPerOneMillion , 
                        totalTests : result.tests , 
                        testsPerOneMillion : result.testsPerOneMillion ,
                        affectedCountries : result.affectedCountries ,
                        load : false
                    })

    // console.log(this.state.update , this.state.totalCases , this.state.todayCases , this.state.totalDeaths , this.state.todayDeaths)


                 } )
            .catch(error => console.log('error', error));
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
   <Container fluid >
{this.state.load ? 

            <div className="carouselMain">

  <Loader active inverted>Loading</Loader>

</div>
:
<div className="carouselMain">

            <Container >
                   
                    <Grid padded={true}>
                        <Grid.Row >
                     <h1 className="totalCase">Total Cases: <strong>{this.state.totalCases}</strong></h1>
                        </Grid.Row>
                        <Grid.Row  centered={true} >

                            <Grid.Column width={5} >
                             <h2 className="todayCase">Today Cases</h2>
                             <strong style={{color : '#20b2bf'}} >{this.state.todayCases}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Critical Cases</h2>
                            <strong>{this.state.critical}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="todayCase">Active Cases</h2>
                            <strong style={{color : '#20b2bf'}} >{this.state.active}</strong>
                            </Grid.Column>
                        </Grid.Row>
                        

                        
                        
                        <Grid.Row  centered='true' >

                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Recovered Cases</h2>
                            <strong style={{ color : '#34af53' }}>{this.state.recovered}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="todayCase">Total Deaths</h2>
                            <strong>{this.state.totalDeaths}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Today Deaths</h2>
                            <strong>{this.state.todayDeaths}</strong>
                            </Grid.Column>
                        </Grid.Row>
                        
                        
                        
                        <Grid.Row  centered='true' >

                            <Grid.Column width={5} >
                            <h2 className="todayCase">Cases Per One Million</h2>
                            <strong style={{color : '#20b2bf'}} >{this.state.casesPerOneMillion}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Deaths Per One Million</h2>
                            <strong>{this.state.deathsPerOneMillion}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Affected Countries</h2>
                            <strong style={{color : '#ed8e36'}} >{this.state.affectedCountries}</strong>
                            </Grid.Column>
                        </Grid.Row>
                        


                        
                        <Grid.Row  centered='true' >

                            <Grid.Column width={5} >
                            <h2 className="todayCase">Total Tests</h2>
                            <strong style={{color : '#d8bb2b'}}>{this.state.totalTests}</strong>
                            </Grid.Column>
                            <Grid.Column width={5} >
                            <h2 className="criticalCase">Tests Per One Million</h2>
                            <strong  style={{color : '#d8bb2b'}} >{this.state.testsPerOneMillion}</strong>
                            </Grid.Column>
                        </Grid.Row>
                        


                    </Grid>

          
            </Container>
            <p className="updatedResults">Last Updated on: {this.state.update}</p>

            </div>
        }

</Container>
 )
}
}

export default Carousel
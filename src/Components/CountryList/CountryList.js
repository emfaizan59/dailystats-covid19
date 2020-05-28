import React from 'react'
import {Container , Grid, Card , Image ,Header, Icon , Segment , Placeholder} from 'semantic-ui-react'
import './CountryList.css'
import SearchBar from '../SearchBar/SearchBar'
let arrayList = []
class CountryList extends React.Component {
    state = {
            load : true , 
            searchTerm : ''
    }
    

    componentDidMount = () => {
        this.fetchItem("https://corona.lmao.ninja/v2/countries" , 'all')       
    }

    fetchItem = (apiURL , status) => {
     arrayList = []
        fetch(apiURL)
        .then(result => result.json())
        .then(result => {
            // console.log(result.length)
            if(status === 'all')
            {
            
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
          } 
          else{
            for(var i = 0 ; i < result.length ; i++)
         {
          if(result[i].country.toLowerCase().match(status.toLowerCase()))
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

      searchItems = (searchTerm) =>{
        console.log(searchTerm)

        this.setState({
        
            load : true,
            searchTerm : searchTerm
        })
   
        if(searchTerm === '')
        {
          this.fetchItem("https://corona.lmao.ninja/v2/countries" , 'all')
        }
        else{
          this.fetchItem("https://corona.lmao.ninja/v2/countries" , searchTerm)    
        }
    }


    render(){
        return(

            <Container style={{marginTop : '20px'}}>
          <SearchBar callback={this.searchItems} />

{this.state.load ?  
<Grid columns={3}  stackable={true}  padded={true}>
    <Grid.Column >
      <Segment raised style={{height : '300px'}}>
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
      <Segment raised style={{height : '300px'}}>
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
      <Segment raised style={{height : '300px'}}>
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
<div style={{marginTop : '50px'}}>

{arrayList.length > 0 ?

<Grid columns={3}  padded={true} stackable={true} >

{arrayList.map( (element , i) => (
 //  <Grid.Column style={{marginBottom : '60px' , cursor : 'pointer'}}>
 <Grid.Column className="cardView">
 <Segment key={i} raised style={{cursor : 'pointer'}} >
        <Image src={element.countryFlag || '/images/caouselBG.jpg'} centered style={{height : '170px' , width:'100%'}}  />
        <h2 style={{fontSize : '25px' , marginBottom :'-3px'}} >{element.countryName}</h2>
<span className='date'>Last Update: {element.update}</span>
        <div className="totalCases">
            <h2>Total Cases</h2>
            <h2 style={{color:'#E02D2F'}}>{element.totalCases || '-'}</h2>
        </div>
     <div className="details">
        <Grid padded={true}>
            <Grid.Row >
                <Grid.Column width={8}>
    <Segment color="olive" raised ={true} style={{marginTop:'-10px' , width : '100%' }} compact={true} size="mini"  >
        <div className="twoColDiv">
            <h5>Today Cases</h5>
            <h5>{element.todayCases || '-'}</h5>
        </div>
        </Segment>      
                </Grid.Column>
                <Grid.Column width={8}>
      <Segment color="green" raised ={true} style={{marginTop:'-10px' , width : '100%' }} compact={true} size="mini"  >
        <div className="twoColDiv">
            <h5>Total Active</h5>
            <h5>{element.active || '-'}</h5>
        </div>      
        </Segment>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row centered={true} >
                <Grid.Column width={8}>
<Segment color="red"  raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
                
        <div className="twoColDiv">
            <h5>Total Deaths</h5>
            <h5>{element.totalDeaths || '-'}</h5>
        </div>  
        </Segment>    
                </Grid.Column>
                <Grid.Column width={8}>
<Segment color="red" raised ={true} style={{marginTop:'-10px' , width : '100%'}} size="mini"  >
                    
        <div className="twoColDiv">
            <h5>Today Death</h5>
            <h5>{element.todayDeaths || '-'}</h5>
        </div>      
        </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Grid.Column width={8}>
<Segment color="teal" raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
                
        <div className="twoColDiv">
            <h5>Recovered</h5>
            <h5>{element.recovered || '-'}</h5>
        </div>      
</Segment>
                </Grid.Column>
                <Grid.Column width={8}>
<Segment color="red" raised ={true} style={{marginTop:'-10px', width : '100%' }}  size="mini"  >
          
        <div className="twoColDiv">
            <h5>Critical</h5>
            <h5>{element.critical || '-'}</h5>
        </div>      
</Segment>
                </Grid.Column>

            </Grid.Row>


            <Grid.Row centered={true}>
                <Grid.Column width={16}>
<Segment color="blue" raised ={true} style={{marginTop:'-10px', width : '100%' }} compact={true} size="mini"  >    
        <div className="twoColDiv">
            <h5>Total Tests Conducted</h5>
            <h5>{element.totalTests || '-'}</h5>
        </div>      
</Segment>
                </Grid.Column>
             
            </Grid.Row>


        </Grid>
        </div>
    
  
</Segment>
</Grid.Column>

)
)
}

</Grid>
  //  {/* </Card.Group> */}
  
:
<h1>No Result Found ...</h1>
}
</div>

}
</Container>
        )
    }
}


export default CountryList
import React, {Component} from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/layout.css'

let style



class Front extends Component{

    constructor(props){
        super(props);

        this.state = {
            info:'none'
        }
    }

    pictoClick(picto){
        if (this.state.info === picto){
            this.setState({info:'none'});
        }else{
            this.setState({info:picto});
        }
    }
   
    render(){

        var name, location, social, status, sumup, photo, get;
        
        if (this.props.dataGen && this.props.sumup){
            name = this.props.dataGen.name;
            photo = this.props.dataGen.photo;
            get = this.props.dataGen.downloadResume;
            
            location = this.props.dataGen.location;
            social = this.props.dataGen.social.map((item)=>{
            return (
                <div>
                    <a href={item.url} ><FontAwesomeIcon icon={['fab', item.name]} style={style.picto} size='2x' /></a>
                </div>
            )
            });
            
            
            status = this.props.sumup.map((item)=>{
                return <p>{item.status}</p>
                });
            sumup = this.props.sumup.map((item)=>{
            return <p>{item.p}</p>
            });
        
        
        }



        return(
        <div>
            <div className='header' style={{marginTop:'12vh', display:'flex', backgroundColor:'#595959'}}>
                <div style={style.avatar2} className=''></div>
                <Image style={style.avatar} src={photo} alt='LeMoi' roundedCircle/> 
                
            </div>
            <Container style={{marginTop:'12vh'}} >
                <Container >
                
                
                
               
                <Row style={{justifyContent:'center', flexWrap:'nowrap'}}>
                   
                    {social}
                    <a href={get} download><FontAwesomeIcon icon={['fas', 'download']} style={style.picto} size='2x' /></a>
                       
                </Row>

                <hr/>
                
            </Container>

                <Container >
                    <Row className='center'>
                        <div style={style.name}>{name}</div>
                    </Row>
                    <Row className='center' style={style.blocSpace}>
                        <img style={{maxHeight:32, maxWidth:32, alignSelf:'center'}} src="./logo/location.png" alt='location'/>
                        <div style={style.location}>{location}</div>
                    </Row>
                    <Row  className='center'>
                        <div style={style.blocSpace, style.status}>
                            {status}
                        </div>
                        <div style={{textAlign:'justify'}}>
                            {sumup}
                        </div>
                   
                    </Row>
                </Container>
            </Container>
        </div>   
        );
    }
    
}



export default Front;

style = {
   avatar:{
       width: '32vh',
       height: '32vh',
       alignSelf:'center',
       position:'absolute'
   },
   avatar2:{
    width: '38vh',
    height: '38vh',
    margin:'-12vh',
    border:' 2px none',
    
    borderRadius:'50%',
    alignSelf:'center',
    backgroundColor:'#595959'
},
   picto:{
    margin: "1em",
    cursor: 'pointer'
   },

   name:{
    color:'#F2884B',
    fontSize: '64px',
    fontWeight: 'bold',

   },

   location:{
       fontSize:'32px',
       fontWeight: 'bold'
   },

   blocSpace:{
       marginBottom: '1em',
   },

   status:{
       color:'#F2884B',
       fontSize:'32px',
       marginBottom:'1ex'
   },

   link:{
        texDecoration: 'none',
        textColor: 'black'
   }


};


/* TRASH CODE
##################################
ACCORDION
##################################
<Col>
                        <Accordion defaultActiveKey='0'>
                            <div>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <img src="/logo/mail.png" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <ul style={{textAlign: 'start'}}>{emails}</ul>
                                </Accordion.Collapse>
                            </div>
                            <div>
                                <Accordion.Toggle  as={Button} variant="link" eventKey="2">
                                <img src="/logo/phone.png" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <p>{phone}</p>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </Col>
                */
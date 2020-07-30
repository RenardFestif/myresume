import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';



import Flippy, {FrontSide, BackSide} from 'react-flippy';


let style;


class Skills extends Component{

    
    render(){

        var secteurs, title, titleLang, lang;
        
        if(this.props.data){
           title = this.props.data.technique.title
           titleLang= this.props.data.langues.title
           
           secteurs = this.props.data.technique.tab.map((item)=>{
                return(
                    <Flippy
                        
                        flipOnHover={true}
                        flipOnClick={false}
                        flipDirection="horizontal"
                        ref={(r)=>this.fliper = r}
                        style={{width:'16em', height:'16em', margin:'1em'}}>

                            <FrontSide style={{backgroundColor:item.color, display:'flex', flexDirection:'column'}}>
                                <img src={item.logo} alt='Logo' style={style.logo}/>
                                <p style={{color:item.textColor, fontFamily:'Comfortaa'}}>{item.name}</p>
                            </FrontSide>
                            <BackSide style={{backgroundColor:item.color,display:'flex',flexDirection:'column', alignContent:'space-around', justifyContent:'center'}}>
                            {
                                item.tools?
                                    item.tools.map((itemtools)=>{
                                        return (
                                            
                                                
                                                <p style={{color:item.textColor, fontFamily:'Comfortaa'}}>{itemtools.name}</p>
                                            
                                        )
                                    })
                                :
                                <div >
                                    <img src={item.logo} alt='Logo' style={style.logo}/>
                                    <p style={{color:item.textColor, fontFamily:'Comfortaa'}}>{item.name}</p>
                                </div>
                                
                          }
                          </BackSide>
                            
                            
                    </Flippy>    
                )
           })

           lang = this.props.data.langues.tab.map((item)=>{
               return(
                <Row style={{margin:'1em', justifyContent:'space-evenly'}}>
                    <div style={{width:'8em', textAlign:'left'}}>{item.langue}</div>
                    <ProgressBar  now={item.niveau} label={item.titre} max={6} className='prog' variant='warning'/>
                </Row>
               )
           })
        }
        
        return (
            
            <Container >
                
                <div className='title' style={{color:'#F2884B'}}>{title}</div>
                <Row style={{justifyContent:'space-evenly'}}>{secteurs}</Row>
                <div className='title'>{titleLang}</div>
                <Col style={{justifyContent:'center', paddingBottom:'1em'}}>{lang}</Col>
                
            
            </Container>
        );
        
    }
}

export default Skills;

style = {
    logo:{
        width:'128px',
        height:"128px",
        alignSelf:'center',
        margin:'2em',
        opacity:0.7,
        filter: 'alpha(opacity=50)',

    }
}


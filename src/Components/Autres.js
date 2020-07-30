import React, {Component} from 'react';

import Container from 'react-bootstrap/Container'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Autres extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:'none'
        }
    }

    handleClick(id){
        if (this.state.selected === id){
            this.setState({selected:'none'});
        }else{
            this.setState({selected:id});
        }
        console.log(id)
    }
    render(){
        
        var titre, description, image;
        if (this.props.data){
           
            titre=this.props.data.titre
            description = this.props.data.description;
            image = this.props.data.image
                    
            
        }
        return(
            <div className='container-fluid' style={{display:'flex', flexDirection:'column'}}>
                <div className='title' style={{color:'#F2884B'}}>{titre}</div>
                
                <Container>
                    <img src={image} alt='activities' style={{height:'8vw', textAlign:'center'}}/>
                    <p style={{textAlign:'center'}}>{description}</p> 
                    <a href='https://pin.it/ap56wgxolj24xp'><FontAwesomeIcon icon={['fab', 'pinterest']} style={{fontSize:'4vw', color:''}} /></a>
                </Container>
                
                
            </div>

        )
    }
}

export default Autres

/*<div style={{ alignSelf:'center', width:'50vw', border:'solid 1px #91B3AF', padding:'2em', backgroundColor:'#91B3AF', color:'#fff', borderRadius:'16px', boxShadow:'8px 8px 8px grey'}}>
                    {currentText}
                </div>
                <div style={{paddingTop:'1em', display:'flex', justifyContent:'center'}}>{cards}</div> */
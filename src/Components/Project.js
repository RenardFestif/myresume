import React, {Component} from 'react';


import Carousel from 'react-bootstrap/Carousel';

class Project extends Component{
    render (){
        var title, proj;
        if (this.props.data){
            title=this.props.data.titre
            proj = this.props.data.tab.map((item)=>{
                return (
                    <Carousel.Item>
                        <div style={{height:'70vh'}}>
                            <a href={item.lien}>
                                <img
                                className='d-block w-100'
                                src={item.photo}
                                alt='Image project'
                                style={{paddingLeft:'24vw', paddingRight:'24vw', paddingTop:'8vh', opacity:'60%'}}/>
                            </a>
                        </div>
                        <Carousel.Caption  >
                            <div style={{fontSize:'32px', color:'#F2884B'}}>{item.name}</div>
                            <div className='flippyCard'>{item.description}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
        
        return(
        <div className='container-fluid' style={{backgroundColor:'#595959', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            
            <div className='title' style={{color:'#ffff'}}>{title}</div>
            
            <Carousel style={{marginBottom:'2em'}}>
                {proj}
            </Carousel>
            

        </div>
        )
    }
}

export default Project;
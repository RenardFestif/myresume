import React, {Component} from 'react';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';



class MyTimeLine extends Component {

    getWork(item){
        
        return (
            <VerticalTimelineElement
            className='vertical-timeline-element--work'
                    contentStyle={{ background: '#C9C9C9', color: '#000000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #D0D0D0' }}
                    date={<p>{item.date}</p>}
                    icon={<FontAwesomeIcon icon='briefcase' size='lg'/>}
                    iconStyle={{ background: '#F2884B', color: '#fff' }}>

                        <h3>{item.role}</h3>
                        <h5>@{item.employeur} ({item.lieu})</h5>
                        <p>{item.description}</p>
            </VerticalTimelineElement>
        )
        
    }
    getEd(item){
        return (
            <VerticalTimelineElement
            className='vertical-timeline-element--education'
                    contentStyle={{ background: '#F2F2F2', color: '#000000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #F2F2F2' }}
                    date={<p>{item.date}</p>}
                    icon={<FontAwesomeIcon icon={faGraduationCap} size='lg'/>}
                    iconStyle={{ background: '#F2884B', color: '#fff' }}>

                        <h3>{item.diplome}</h3>
                        <h4>{item.specialite}</h4>
                        <h5>@{item.etablissement} ({item.lieu})</h5>
                        <p>{item.description}</p>
            </VerticalTimelineElement>
        )
    }

    render(){
        var ed,title

        if(this.props.data.fr && this.props.data.en){
            if(this.props.lang === 'fr'){
                title = this.props.data.fr.title;
                ed = this.props.data.fr.edWork.map((item)=>{
                    if (item.type === 'ed'){
                        return this.getEd(item);
                    }else{
                        return this.getWork(item);
                    }
                });
            }else{
                title = this.props.data.en.title;
                ed = this.props.data.en.edWork.map((item)=>{
                    if (item.type === 'ed'){
                        return this.getEd(item);
                    }else{
                        return this.getWork(item);
                    }
                });   
            }
        }
        
        
        
        
        return (
        <div className='container-fluid' style={{backgroundColor:'#595959'}}>
            <Container style={{paddingTop:'1em', marginTop:'2em'}}>
                <div className='title' style={{color:'#ffff'}}>{title}</div>
                <VerticalTimeline>
                    {ed}
                </VerticalTimeline>
            </Container>
        </div>
        )
    }   
}


export default MyTimeLine;
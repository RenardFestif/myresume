import React,{Component} from 'react';

let style

class Lang extends Component{
    render(){
        return(
            <div style={{textAlign:'end', paddingRight:'1em'}} className='container-fluid'>
                <img style={style.flag} src='./logo/france.png' alt='change lang to fr' onClick={()=>{this.props.changeLang("fr")}}/>
                <img style={style.flag} src='./logo/united-kingdom.png' alt='change lang to en'  onClick={()=>{this.props.changeLang("en")}}/>
                
            </div>
            )
        
    }
}

style={
    flag:{
        mawWidth: '32px',
        maxHeight: '32px',
        margin: '1em',
        cursor: 'pointer'
    }
}

export default Lang
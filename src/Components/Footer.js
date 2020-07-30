import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <hr style={{marginTop:'2em'}}/>
                <div className='container-fluid' style={{fontSize:'8px', display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
                    
                    <p>Alpha release 25/01/20</p>
                
                </div>
            </div>
        );
    }
}
export default Footer
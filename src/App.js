import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import Front from './Components/Front';
import MyTimeLine from './Components/MyTimeLine';
import Lang from './Components/Lang';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Autres from './Components/Autres';
import Footer from './Components/Footer'

import { loadReCaptcha } from 'react-recaptcha-google';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhone, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faEnvelope, faPhone, faGraduationCap, faBriefcase);



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      lang : 'fr'
    };

    this.changeLang = this.changeLang.bind(this);
    
  }

  //Getting data of the resume
  getResumeData(){
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
       error: (err)=>{
        console.log(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
    loadReCaptcha();
  }

  changeLang(newL){
    this.setState({lang:newL});
  }

  setDataLang(){
    if (this.state.lang==='fr'){
      return this.state.resumeData.fr;
    }else{
      return this.state.resumeData.en;
    }
  }

  render(){
   
  
    var datalang = this.setDataLang()

    if(this.state.resumeData.en || this.state.resumeData.fr || this.state.resumeData.meGen){
      var skills = datalang.skills
      var projets = datalang.projets
      var autres = datalang.autres;
      
      var sumup = datalang.sumup;

      var gen = this.state.resumeData.meGen
    }

    
    return (
      <div className="App">
          <Lang       lang={this.state.lang} changeLang={this.changeLang}/>
          <Front      dataGen={gen}  sumup={sumup} lang={this.state.lang}/>
          <MyTimeLine data={this.state.resumeData} lang={this.state.lang}/>
          <Skills     data={skills}/>
          <Project    data={projets}/>
          <Autres     data={autres}/>
          
          <Footer/>
      </div>
    );
  }

}



export default App;
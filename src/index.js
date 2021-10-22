import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var pre=document.getElementById('preloader');
var hola=document.getElementById('hola');
var Component = React.Component({

  getInitialState: function () {
      return {position: 0};    
  },

  componentDidMount: function () {
    setTimeout(
      () => {
        pre.velocity({
            opacity : 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function(){
            hola.velocity({
            translateY : "-100%"
         }, 
        //    {
        //     duration: 1000,
        //     easing: [0.7,0,0.3,1],
        //     complete: function(){
        //         $('.home').addClass('animate-border divide');
          //   }
        //}
        )  
            }
        })
    }, 
      3000
    );
  },

  render: function () {
       return (
          <div className="component">
              {this.state.position}
          </div>
       ); 
  }

});

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

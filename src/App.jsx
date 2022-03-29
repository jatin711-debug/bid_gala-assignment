import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Component from './components/Parallex/Component'
import TextBox from './components/Textbox/Textbox';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Component source="https://johnny-buck.s3.us-west-2.amazonaws.com/dark.jpg"/>
      <TextBox/>
      <Component source="https://johnny-buck.s3.us-west-2.amazonaws.com/hap.jpg"/>
      <TextBox/>
      <Component source="https://johnny-buck.s3.us-west-2.amazonaws.com/imgs.jpg"/>
    </div>
  )
}

export default App;


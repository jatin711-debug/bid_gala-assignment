import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Component from './components/Parallex/Component'
import TextBox from './components/Textbox/Textbox';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Component source="https://codecary.com/wp-content/uploads/2021/11/maxresdefault-1.jpg"/>
      <TextBox/>
      <Component source="https://phlearn.com/wp-content/uploads/2015/11/PHLEARN-Parallax-header.jpg?fit=1140%2C680&quality=99&strip=all"/>
      <TextBox/>
      <Component source="https://i.ytimg.com/vi/XdYEzui3Ttc/maxresdefault.jpg"/>
    </div>
  )
}

export default App;


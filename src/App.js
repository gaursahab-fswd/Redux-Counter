import React from 'react'
import  './App.css'


const App = () =>{

  return(
    
      <div className='container'>
            <h1>Increment/Decrement Counter</h1>
            <h4>using React-Redux</h4>

            <div>
                <a className='quantity_minus' title='Decrement'><span>-</span></a>
                <input name='quatity' type='text' className='quantity_input' value='0'/>
                <a className='quantity_plus' title='Increment'><span>-</span></a>
            </div>
      </div>

  );

}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Home';
import CounterWithProps from '../CounterWithProps';

const Pages = () =>{
    return(
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterWithProps initialCount={10} />} />
      </Routes>
    </Router>
    )
}

export default Pages;
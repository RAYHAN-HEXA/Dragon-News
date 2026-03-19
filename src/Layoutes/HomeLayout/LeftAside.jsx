import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
       <Suspense fallback ={<p><span className="loading loading-spinner text-error"></span></p>} >
         <Categories></Categories>

       </Suspense>
        </div>
    );
};

export default LeftAside;
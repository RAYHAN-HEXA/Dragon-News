import React from 'react';

const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-bold text-accent mb-5' >Login With</h2> 
           <div className='space-y-3'>
<button className='btn w-full btn-outline btn-secondary '>Login  with Google <FaGoogle size={24} />  </button>
<button className='btn w-full btn-outline btn-primary '>Login  with Github <FaGithub size={24} />  </button>
           </div>
        </div>
    );
};

export default SocialLogin;
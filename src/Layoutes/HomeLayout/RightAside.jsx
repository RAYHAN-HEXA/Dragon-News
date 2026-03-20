import React from 'react';
import SocialLogin from '../../Components/SocialLOgin/SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;
import React from 'react';
import loadingLogo from "../../Users/333 (1).gif";

const Preloader = () => {
    return (
        <div>
            < img style={{width:'600px'}} src={loadingLogo} alt={'Loading..'}/>
        </div>
    );
};

export default Preloader;
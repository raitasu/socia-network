import React from 'react';
import classes from './HeaderLogo.module.css'

const HeaderLogo = () => {
    return (
        <div className={classes.header_logo}>
            <img
                src='https://avatars.mds.yandex.net/get-vertis-journal/4080458/2020-10-22-86fb625bf6534b9db366df89f03b2e62.jpg_1622736787276/orig'
                alt='header_logo'/>
        </div>

    );
};

export default HeaderLogo;
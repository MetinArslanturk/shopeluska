import React from 'react';

const Footer = () => {
    return (
        <>
            <div>
                ©{' '}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.metinarslanturk.com"
                >
                    Metin Arslanturk
                </a>{' '}
                <span className="mail-text">
                    ( contact@metinarslanturk.com )
                </span>{' '}
                --{' '}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/MetinArslanturk/shopeluska"
                >
                    GitHub of This Project
                </a>
            </div>
        </>
    );
};

export default Footer;

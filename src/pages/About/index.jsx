import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import AboutDatas from '../../assets/data/aboutData';
import './About.css'

const About = () => {
    return (
    <div className='about-wrapper'>
        <Banner url="https://i.ibb.co/ngPmzFN/Image-source-2.png" />
            <div className='about-collapses'>
                {AboutDatas.map((item) => (
                    <Collapse content={item.content} title={item.title} />
                ))}
      </div>
     </div>
    );
};

export default About;


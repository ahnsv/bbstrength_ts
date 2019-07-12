import * as React from 'react';
import '../style/test.scss';

interface AboutProps {
    name: string;
    age: string;
}

const About = (props: AboutProps) => {
    return <div className={`about`}>{props.name}</div>;
};

export default About;

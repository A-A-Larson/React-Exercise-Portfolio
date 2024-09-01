import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';

const About = () => {

    return (
        <>
            <DrawerAppBar title="About Me" />
                <div id='aboutPage' style={{width: "70%", margin: "auto", paddingTop: 50}}>
                    <h1>A Lifelong Learner with a Passion for Web Development</h1>
                    <p>Welcome to my web developer portfolio! I'm Andrew Larson, a dedicated web developer on a journey to combine creativity and technology.</p>

                    <h2>A Shift in Passion:</h2>

                    <p>Formerly an automotive mechanic, I found myself looking for a way to continue working on technical problems as I grew out of my youth. I knew I couldn't turn wrenches forever. So I went back to school to embark on a new adventure in web development.</p>

                    <h2>Embracing Web Development:</h2>

                    <p>I'm currently working on a degree in Full Stack Web Development and it has been an exciting process of discovery. I've gained experience in HTML, CSS, JavaScript, React and Java, and I love crafting seamless user experiences through intuitive interfaces.</p>

                    <h2>The Perfect Fusion:</h2>

                    <p>My 15 years of experience as an automotive mechanic has given me a unique problem-solving perspective and keen attention to detail, which I hope to bring to my web development projects.</p>

                    <h2>My Vision:</h2>

                    <p>I hope to use Web Development as a path to keep building, fixing and problem solving.</p>

                    <h2>Let's Connect:</h2>

                    <p>I'm eager to collaborate with fellow professionals and organizations. Feel free to explore my portfolio and get in touch for potential projects or to share ideas.

                    Thank you for visiting, and let's make the web a more captivating place together!</p>

                    <h3>Andrew Larson</h3>
                    
                </div>
        </>
    )
}

export default About;
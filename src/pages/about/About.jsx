import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage} >
                Lorem ip sum
            </Header>
            <section className='about__story'>
                <div class="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Image Story" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores, reiciendis facilis aliquam
                            id voluptates quibusdam beatae ducimus molestias
                            quasi voluptatum praesentium saepe nihil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores</p>
                        <p>Adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt</p>
                    </div>
                </div>
            </section>
            <section className='about__vision'>
                <div class="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores, reiciendis facilis aliquam
                            id voluptates quibusdam beatae ducimus molestias
                            quasi voluptatum praesentium saepe nihil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores</p>
                        <p>Adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Image Vision" />
                    </div>
                </div>
            </section>
            <section className='about__mission'>
                <div class="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Image Mission" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores, reiciendis facilis aliquam
                            id voluptates quibusdam beatae ducimus molestias
                            quasi voluptatum praesentium saepe nihil?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt,
                            aspernatur asperiores</p>
                        <p>Adipisicing elit.
                            Quisquam laboriosam corrupti ullam culpa incidunt</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About
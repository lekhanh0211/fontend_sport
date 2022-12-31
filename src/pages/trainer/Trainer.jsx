import './trainer.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import Train from '../../components/Train'

const Trainer = () => {
    return (
        <>
            <Header title="Our Trainer" image={HeaderImage} >
                Lorem ip sum
            </Header>
            <div class="container trainer__container">
                {trainers.map(({ id, image, name, job, socials }) => {
                    return (
                        <Train key={id} image={image} job={job} socials={
                            [
                                { icon: <BsInstagram />, link: socials[0] },
                                { icon: <AiOutlineTwitter />, link: socials[1] },
                                { icon: <FaFacebook />, link: socials[2] },
                                { icon: <FaLinkedin />, link: socials[3] }
                            ]
                        } />
                    )
                })}
            </div>
        </>
    )
}

export default Trainer
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import './contact.css'

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus qui neque facilis quia. Ipsum alias eligendi, suscipit fugiat assumenda inventore. Omnis illum distinctio beatae, quas inventore est mollitia laborum.</p>
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:support@egattor.com" target="_blank" rel="email" ><MdEmail /></a>
                        <a href="http://m.me/ernest_achiever" target="_blank" rel="messenger" ><BsMessenger /></a>
                        <a href="https://wa.me/+233557097546" target="_blank" rel="whatsapp" ><IoLogoWhatsapp /></a>
                        <a href="" target="_blank" rel="whatsapp" ><AiFillGithub /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
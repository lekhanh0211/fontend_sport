import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article >
                    <Link to="" className='logo' >
                        <img src={Logo} alt="Foooter logo" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam facilis beatae commodi, ut magnam aliquam fuga a aliquid,
                        dolores eligendi itaque suscipit ex iste voluptatibus temporibus adipisci veniam hic nobis!</p>
                    <div className="footer__socials">
                        <a href='https://www.facebook.com/khanhle02.11/' target="_blank" rel='linkedin' ><FaLinkedin /></a>
                        <a href='https://www.facebook.com/khanhle02.11/' target="_blank" rel='facebook' ><FaFacebook /></a>
                        <a href='https://www.facebook.com/khanhle02.11/' target="_blank" rel='instagram' ><AiFillInstagram /></a>
                        <a href='https://www.facebook.com/' target="_blank" rel='twitter' ><AiOutlineTwitter /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about" >About</Link>
                    <Link to="/plans" >Plans</Link>
                    <Link to="/trainers" >Trainers</Link>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/gallery" >Gallery</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/about" >Blog</Link>
                    <Link to="/plans" >Case Studies</Link>
                    <Link to="/trainers" >Events</Link>
                    <Link to="/contact" >Comunities</Link>
                    <Link to="/gallery" >FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/about" >Contact Us</Link>
                    <Link to="/plans" >Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2022 REACT JS &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
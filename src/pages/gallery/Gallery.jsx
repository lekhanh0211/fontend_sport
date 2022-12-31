import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
    const galleryLength = 15;
    const images = [];
    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    console.log(images);
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus qui neque facilis quia. Ipsum alias eligendi, suscipit fugiat assumenda inventore. Omnis illum distinctio beatae, quas inventore est mollitia laborum.
            </Header>
            <section className="gallery">
                <div className="container gallery__container">
                    {
                        images.map((images, index) => {
                            return (
                                <article key={index}>
                                    <img src={images} alt={`Gallery Image ${index + 1} `} />                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>

    )
}

export default Gallery
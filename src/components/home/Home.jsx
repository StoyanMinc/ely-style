import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {

    console.log('render');
    const [isMobile, setIsMobile] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [commentIndex, setCommentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const images = [
        `/images/nails1.webp`,
        `/images/nails2.jpg`,
        `/images/nails3.jpg`,
        `/images/nails4.avif`,
        `/images/nails5.webp`,
        `/images/nails6.webp`
    ];

    const comments = [
        {
            comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique voluptatem aliquid omnis doloribus sit quibusdam rem repellat perspiciatis veniam laudantium impedit autem suscipit quo a, at fugit ullam magni.',
            author: 'Stoyan M.',
            id: 1
        },
        {
            comment: '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique voluptatem aliquid omnis doloribus sit quibusdam rem repellat perspiciatis veniam laudantium impedit autem suscipit quo a, at fugit ullam magni.',
            author: 'Stoyan M.',
            id: 2
        },
        {
            comment: '3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique voluptatem aliquid omnis doloribus sit quibusdam rem repellat perspiciatis veniam laudantium impedit autem suscipit quo a, at fugit ullam magni.',
            author: 'Stoyan M.',
            id: 3
        }
    ]
    const nextSlide = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % (images.length - 3)); // Loop back to the first image after the last one (so 4 images are always visible)
    };

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change the image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval when the component unmounts
    }, []);

    const setPreviusComment = () => {
        setCommentIndex(prevState => prevState === 0 ? comments.length - 1 : prevState - 1);
        setDirection(-1);
    }
    const setNextComment = () => {
        setCommentIndex(prevState => prevState + 1 > comments.length - 1 ? 0 : prevState + 1)
        setDirection(1)
    }

    return (
        <div className="home-container">
            <section className="welcome-message-section">
                <div className="welcome-message-holder">
                    <span>love-your-self</span>
                    <h1> Bring fashion <br /> to your <br />fingertips.</h1>
                    <div className="booknow">
                        <a href="tel:+359895779790" className="header-nav-a">Запази час</a>
                    </div>
                </div>
            </section>

            <section className="pedicure-section">
                <div className="pedicure-image-holder"></div>
                <div className="pedicure-message-holder">
                    <span>ultimate relaxion</span>
                    <h1>spa pedicures</h1>
                    <div className="pedicure-options-holder">
                        <span>seasonal scents</span>
                        <span>organic options</span>
                        <span>callus removal</span>
                        <span>relaxing</span>
                        <span>massages</span>
                        <span>paraffin & more!</span>
                    </div>
                    <div className="booknow">
                        <Link to={'/services/pedicures'} className="header-nav-a">See more</Link>
                    </div>
                </div>
            </section>
            <section className="follow-our-jurney">
                <h1>Follow our journey.</h1>
                <div className="slideshow-container">
                    <div className="image-wrapper"
                        style={{ transform: `translateX(-${imageIndex * 25}%)` }}
                    >
                        {images.map((image, index) => {
                            return (<div key={index} className="image-card">
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>)
                        })}
                    </div>
                </div>
            </section>

            <section className="they-are-talking">
                <h1>They're Talking</h1>
                <div className="comments-container">
                    {isMobile ? (
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={comments[commentIndex].id}
                                className="comment-holder"
                                initial={{ x: direction * 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction * -100, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{comments[commentIndex].comment}</p>
                                <span>{comments[commentIndex].author}</span>
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        comments.map(comment => (
                            <div className="comment-holder">
                                <p>{comment.comment}</p>
                                <span>{comment.author}</span>
                            </div>)
                        )
                    )}

                </div>
                <div className="next-comment-buttons-container">
                    <button className="btn-prev-comment" onClick={setPreviusComment}>prev</button>
                    <button className="btn-next-comment" onClick={setNextComment}>next</button>
                </div>
            </section>
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Home() {

    const [imageIndex, setImageIndex] = useState(0);
    const [commentIndex, setCommentIndex] = useState(0);

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
            author: 'Stoyan M.'
        },
        {
            comment: '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique voluptatem aliquid omnis doloribus sit quibusdam rem repellat perspiciatis veniam laudantium impedit autem suscipit quo a, at fugit ullam magni.',
            author: 'Stoyan M.'
        },
        {
            comment: '3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique voluptatem aliquid omnis doloribus sit quibusdam rem repellat perspiciatis veniam laudantium impedit autem suscipit quo a, at fugit ullam magni.',
            author: 'Stoyan M.'
        }
    ]
    const nextSlide = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % (images.length - 3)); // Loop back to the first image after the last one (so 4 images are always visible)
    };


    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change the image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval when the component unmounts
    }, []);

    const setPreviusComment = () => {
        setCommentIndex(prevState => {
            if (prevState === 0) {
                return comments.length - 1
            } else {
                return prevState - 1;
            }
        })
    }

    const setNextComment = () => {
        setCommentIndex(prevState => {
            if (prevState === comments.length - 1) {
                return 0
            } else {
                return prevState + 1;
            }
        })
    }

    return (
        <div className="home-container">
            <section className="welcome-message-section">
                <div className="welcome-message-holder">
                    <span>love-your-self</span>
                    <h1> Bring fashion <br /> to your <br />fingertips.</h1>
                    <div className="booknow">
                        <Link className="header-nav-a">запази час</Link>
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

                    <div className="comment-holder">
                        <p>{comments[commentIndex]?.comment}</p>
                        <span>{comments[commentIndex]?.author}</span>
                    </div>

                </div>
                <div className="next-comment-buttons-container">
                    <div className="btn-prev-comment" onClick={setPreviusComment}>prev</div>
                    <div className="btn-next-comment" onClick={setNextComment}>next</div>
                </div>
            </section>
        </div>
    )
}
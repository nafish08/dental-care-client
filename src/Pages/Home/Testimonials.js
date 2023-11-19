import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Fareha Tahid',
            reviews: 'Exceptional service! The dental care here goes above and beyond – a welcoming atmosphere coupled with skilled professionals made my visit a truly positive experience.',
            location: "Riverside Boulevard, Harbor City, CA, 90210",
            img: "https://i.ibb.co/bsVHsH7/20220316-134218.jpg",
        },
        {
            _id: 2,
            name: 'Nusrat Kabir Nishu',
            reviews: 'Efficient and friendly! From booking my appointment online to the expert care during my visit, this dental practice knows how to make oral health a stress-free journey.',
            location: "Maple Grove Lane, Woodland Hills, TX, 75001",
            img: "https://i.ibb.co/3f1zS4s/20220316-133211.jpg",
        },
        {
            _id: 3,
            name: 'Jannatul Ferdaus Lamia',
            reviews: 'A game-changer in dental care! The personalized attention and modern approach set this clinic apart; I left with a brighter smile and a newfound appreciation for dental visits.',
            location: "Ocean View Avenue, Seaside Heights, NJ, 08751",
            img: "https://i.ibb.co/RhdcXWp/20220316-133237.jpg",
        },
    ]

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
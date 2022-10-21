import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummaryCard = ({ news }) => {
    const { _id, title, details, total_view, rating, image_url, author } = news;

    console.log(news)
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex items-center'>
                    <Card.Img variant="top" src={author?.img} style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                    <div className='ms-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>see more</Link> </p>
                            : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;
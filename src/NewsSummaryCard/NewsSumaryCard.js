import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSumaryCard = ({news}) => {

    const {_id, title , author, details, totla_view, image_url}   = news;




    return (
        <Card className="text-center">
        <Card.Header className ='d-flex'>
            <div>
                <Image
                  roundedCircle
                  src={author.img}
                  style={{height : '60px'}}

                >
            

                </Image>
            </div>

            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant='top' src={image_url} />
          <Card.Text>
        
        {
            details.length > 250 ? 

            <p>{details.slice(0,250) + '...'} <Link  to={`/news/${_id}`}>Read More </Link> </p>

            : <p>{details}</p>
        }
     
          </Card.Text>
          {/* <Butto variant="primary">Go somewhere</Butto> */}
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsSumaryCard;
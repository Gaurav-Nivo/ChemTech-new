"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogPost = () => {
    const blog = [
        {
            "id": "1",
            "title": "Tacrolimus",
            "image": "https://www.simsonpharma.com/admin/uploads/blog/thumbnail_1702360854.jpg"
        },
        {
            "id": "2",
            "title": "Nitrosamine Compounds",
            "image": "https://www.simsonpharma.com/admin/uploads/blog/thumbnail_1700811001.jpg"
        },
        {
            "id": "3",
            "title": "Rabeprazole",
            "image": "https://www.simsonpharma.com/admin/uploads/blog/thumbnail_1700632003.jpg"
        },
        {
            "id": "4",
            "title": "Applications of Robenacoxib D5",
            "image": "https://www.simsonpharma.com/admin/uploads/blog/thumbnail_1700299084.jpg"
        },
        {
            "id": "5",
            "title": "Applications of Desloratadine D4 ",
            "image": "https://www.simsonpharma.com/admin/uploads/blog/thumbnail_1700111710.jpg"
        },
    ]
    return (
        <>
            <div className='container '>
                <div className='row blog-section'>
                    {blog.map((item) => (
                        <div className='col-4 blog-card-main' key={item.id}>

                            <Card className='blog-card'>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>

                                    <Button variant="primary">Read</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPost
import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Row, Container, Col, Image, Card } from 'react-bootstrap';

export const FullPost = (props)=>{
    
    const {id} =useParams();
    const [postData, setPostData] = useState({post : {}})


    useEffect(() => {
		axios.get(`https://ctrl-dev-back-test.up.railway.app/posts/${id}`).then((res) => {
			setPostData({ post: res.data.result });
           
		});
	},);

    return(
        <Container>
  <Row className="justify-content-center">
          <Col xs={10} md={6}>
            <Card className="text-center mb-3">
              <Card.Header>
                <h2>{postData.post.title}</h2>
              </Card.Header>
              <Card.Body>
                <p className="text-muted mt-3">{postData.post.body}</p>
              </Card.Body>
              <Card.Footer className="text-muted">
           
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
        )

}

/*
      
*/
import axios from 'axios';
import {Button, Card, Row} from 'react-bootstrap'
import React from 'react';
import { Component } from 'react';
import { Router } from 'react-router-dom';
import { FullPost } from './FullPost';
import {Container} from 'react-bootstrap';
import {Link} from '@mui/material';
//
import "./post.css"
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            info: {},
        };
    }

    componentDidMount() {
        this.getBlogPosts();
        }
    
    getBlogPosts(){
        axios
        .get('https://ctrl-dev-back-test.up.railway.app/posts/')
        .then(res => {
            this.setState({ posts: res.data.result });
        })
        .catch(err => {
            console.log(err)
        })

    }

    getFullPost(id){
        <Router.Link to="posts/:id">Landing Page</Router.Link>     
        
    }
    
    render(){
        return (
            <Container className="d-flex flex-column align-items-center">
              {this.state.posts.map(item =>(
                <div className="post">
                <div className="post__avatar">
                    <Avatar src={item.user.avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                    <div className="post__headerText">
                    <Link href={'post/' + item.id}  >{item.title } </Link>
                        <h3>
                        <span className="post__headerSpecial">
                            {item.user.is_verified} @
                            {item.user.name}
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{item.body}</p>
                    </div>
                    </div>
                    <div className="post__footer">
                    {item.likesCount}
                    <FavoriteBorderIcon fontSize="small" />
                    
                    </div>
                </div>
                </div>
                
                
                
              ))}
            </Container>
          );
    }
}



/*
        return(
            <Row xs={1} md={2} className="g-4">
                {this.state.posts.map(item =>(
                
                    <Card key={item.id} bg="secondary" style={{ width: '18rem' }}>   
                        <Avatar src={item.user.avatar} />
                        <Card.Title>{item.title}</Card.Title>
                        <p>{item.body.slice(0,70)}...</p>

                        
                            <Button variant="success" 
                                    href={'post/' + item.id}  
                            >
                                    Post
                            </Button>
                    
                        <Card.Footer >{item.user.name}</Card.Footer>
                    </Card>
                ))}
            </Row>
        )
        
        */
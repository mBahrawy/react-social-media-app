import React from 'react'
import Container from './PostCard.style'
import { Post } from '@/core/interfaces/Post'
import { Link } from 'react-router-dom'

type PostCardProps = {
  data: Post
}

function PostCard({ data }: PostCardProps): JSX.Element {
  return (
    <Container className='justify-content-center d-flex'>
      <div className='card mb-4 col-lg-6 col-md-8 col-12'>
        <div className='card-header'>By user: {data.userId}</div>
        <div className='card-body'>
          <h5 className='card-title'>{data.title}</h5>
          <p className='card-text'>{data.body}</p>
          <img src='https://placehold.co/600x300?text=Placeholder+image' className='img-fluid mb-3 w-100' />
          <Link to={`/${data.id}`} className='btn btn-primary'>
            Full post
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default PostCard

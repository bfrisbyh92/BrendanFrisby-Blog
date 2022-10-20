import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className="text-white">
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
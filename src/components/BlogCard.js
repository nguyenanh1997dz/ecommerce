import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (  
    <div style={{backgroundColor : 'white'}}>
        <div className="blog-card">
            <img className='img-fluid w-100' src="images/blog-1.jpg" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">1 Dec, 2024</p>
            <h5 className="title">Hello</h5>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti, animi alias quasi nihil sunt voluptas laboriosam porro exercitationem vero voluptate ullam accusantium. Vel tempora quisquam culpa eius, illum soluta!
            </p>
            <Link className='button'>Read more</Link>
        </div>
    </div>
  )
}

export default BlogCard

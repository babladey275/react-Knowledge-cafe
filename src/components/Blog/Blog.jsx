import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookMarks}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mt-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between my-6'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-bold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='text-gray-600'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookMarks(blog)} 
                    className='ml-2'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='ml-2 text-gray-600'><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks: PropTypes.func
}

export default Blog;
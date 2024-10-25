import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookMarks, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='space-y-4 mt-12'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
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
            <button onClick={() => handleMarkAsRead(reading_time)} className='font-bold last:text-purple-700 underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
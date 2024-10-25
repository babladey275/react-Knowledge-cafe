import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-4">
            <div>
                <h2 className="text-3xl font-bold m-2 p-4 border rounded-xl bg-purple-200">Reading Time: {readingTime} min</h2>
            </div>
            <div className="h-full bg-gray-300 rounded-xl">
                <h1 className="text-3xl font-bold text-center pt-4">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
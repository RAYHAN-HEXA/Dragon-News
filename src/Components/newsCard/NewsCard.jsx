import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({singleNews }) => {
    // Destructuring for cleaner code
    const {
        title,
        author,
        total_view,
        rating,
        image_url,
        details,
    } = singleNews;

    return (
        <div className="card bg-base-100 border rounded-lg overflow-hidden mb-6 shadow-sm">
            {/* Header: Author Info and Actions */}
            <div className="flex items-center justify-between p-4 bg-gray-50">
                <div className="flex items-center gap-3">
                    <img 
                        src={author?.img} 
                        alt={author?.name} 
                        className="w-10 h-10 rounded-full object-cover" 
                    />
                    <div>
                        <p className="font-bold text-sm leading-none">{author?.name}</p>
                        <p className="text-xs text-gray-500 mt-1">
                            {author?.published_date ? new Date(author.published_date).toDateString() : 'No Date'}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                    {title}
                </h2>
                
                <img 
                    src={image_url} 
                    alt="news-thumbnail" 
                    className="w-full h-64 object-cover rounded-md mb-4" 
                />

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {details.length > 250 ? (
                        <>
                            {details.slice(0, 250)}... 
                            <span className="text-orange-500 font-semibold cursor-pointer ml-1">Read More</span>
                        </>
                    ) : details}
                </p>
                
                <hr className="my-4 border-gray-100" />

                {/* Footer: Rating and Views */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex text-orange-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.round(rating?.number) ? "fill-current" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">{rating?.number}</span>
                        {rating?.badge && (
                            <span className="badge badge-sm bg-orange-100 text-orange-600 border-none capitalize">
                                {rating.badge}
                            </span>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span className="text-sm font-medium">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
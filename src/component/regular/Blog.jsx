import BlogContent from "../small/BlogContent";

const Blog = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-14 gap-5 p-2">
            <BlogContent />
            <BlogContent />
            <BlogContent />
            <BlogContent />
        </div>
    );
};

export default Blog;

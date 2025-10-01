import React from 'react';
import Navbar from '../../layout/Navbar';
import techzen_logo_home_2 from "../../assets/images/techzen_logo_home_2.png";
import Common_Banner from '../../Components/Common_Banner';
import column_blog_7 from '../../assets/images/blog/column-blog-7.jpg'
import blog_single_thumb_1 from '../../assets/images/blog/blog-single-thumb-1.jpg'
import blog_single_thumb_2 from '../../assets/images/blog/blog-single-thumb-2.jpg'
import blog_single_play from '../../assets/images/blog/blog-single-play.jpg'
import side_blog_1 from '../../assets/images/blog/side-blog-1.jpg'
import side_blog_2 from '../../assets/images/blog/side-blog-2.png'
import side_blog_3 from '../../assets/images/blog/side-blog-3.jpg'
import side_blog_4 from '../../assets/images/blog/side-blog-4.jpg'
import side_blog_5 from '../../assets/images/blog/side-blog-5.jpg'
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import BlogSingle_Standerd from '../../Components/BlogSingle_Standerd';

const BlogSingle = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='blog'
            />
            <Common_Banner
                pageName={'Blog Single'}
            />
            <BlogSingle_Standerd
                column_blog_7={column_blog_7}
                blog_single_thumb_1={blog_single_thumb_1}
                blog_single_thumb_2={blog_single_thumb_2}
                blog_single_play={blog_single_play}
                side_blog_1={side_blog_1}
                side_blog_2={side_blog_2}
                side_blog_3={side_blog_3}
                side_blog_4={side_blog_4}
                side_blog_5={side_blog_5}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default BlogSingle;
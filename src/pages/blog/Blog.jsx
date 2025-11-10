import React from 'react';
import Navbar from '../../layout/Navbar';
import techzen_logo_home_2 from "../../assets/images/techzen_logo_home_2.png";
import Common_Banner from '../../Components/Common_Banner';
import standaed_thumb_1 from '../../assets/images/blog/standaed-thumb-1.jpg';
import standaed_thumb_2 from '../../assets/images/blog/standaed-thumb-2.jpg';
import standaed_thumb_3 from '../../assets/images/blog/standaed-thumb-3.jpg';
import side_blog_1 from '../../assets/images/blog/side-blog-1.jpg';
import side_blog_2 from '../../assets/images/blog/side-blog-2.png';
import side_blog_3 from '../../assets/images/blog/side-blog-3.jpg';
import side_blog_4 from '../../assets/images/blog/side-blog-4.jpg';
import side_blog_5 from '../../assets/images/blog/side-blog-5.jpg';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import BlogSingle_Standerd from '../../Components/BlogSingle_Standerd';

const Blog = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='blog'
            />
            <Common_Banner
                pageName={'Blog Standard'}
            />
            <BlogSingle_Standerd
                passClass={'rs-blog-standard-page'}
                standaed_thumb_1={standaed_thumb_1}
                standaed_thumb_2={standaed_thumb_2}
                standaed_thumb_3={standaed_thumb_3}
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
                techzen_logo_home_2={techzen_logo_home_2}
            />
        </>
    );
};

export default Blog;
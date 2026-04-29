import contact_bg from '../assets/contact-bg.png';
import Footer from '../components/Footer';
import FAQSection from './BlogComponents/FAQSection';
import BlogHero from './BlogComponents/BlogHero';
import ReachOutSection from './BlogComponents/ReachOutSection';
import MarineInfoSection from './BlogComponents/MarineInfoSection';
import MarineInfoSection2 from './BlogComponents/MarineInfoSection2';
import RecentArticles from './BlogComponents/RecentArticles';


function Blog() {
    return (
        <>
            <BlogHero />
            <div className="relative z-10">
                <MarineInfoSection />
                <MarineInfoSection2 />
                <RecentArticles />
                <FAQSection />
                <ReachOutSection backgroundImage={contact_bg} />
                <Footer />
            </div>
        </>
    );
}

export default Blog;
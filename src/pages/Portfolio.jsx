import contact_bg from '../assets/contact-bg.png';
import Footer from '../components/Footer';
import PortfolioHero from './PortfolioComponents/PortfolioHero';
import ReachOutSection from './PortfolioComponents/ReachOutSection';
import MaterialSupplyTable from './PortfolioComponents/MaterialSupplyTable';


function Blog() {
    return (
        <>
            <PortfolioHero />
            <div className="relative z-10">
                <MaterialSupplyTable />
                <ReachOutSection backgroundImage={contact_bg} />
                <Footer />
            </div>
        </>
    );
}

export default Blog;
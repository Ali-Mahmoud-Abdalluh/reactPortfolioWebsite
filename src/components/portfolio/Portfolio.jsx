import './portfolio.css';
import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6 } from '../../assets/'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const portfolios = [
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio1 },
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio2 },
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio3 },
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio4 },
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio5 },
        { title: "This is a portfolio item title", github: "https://github.com/", dribbble: "https://dribbble.com/", image: portfolio6 },
    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolios.map(
                        (portfolio, index) =>
                            <PortfolioCard key={index} portfolio={portfolio} />
                    )
                }
            </div>
        </section>
    )
}

export default Portfolio
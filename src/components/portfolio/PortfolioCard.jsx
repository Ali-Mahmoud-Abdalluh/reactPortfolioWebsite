import './portfolio.css'

const PortfolioCard = ({ portfolio }) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={portfolio.image} alt="portfolio image" />
            </div>
            <h3>{portfolio.title}</h3>
            <div className='portfolio_item-cta'>
                <a href={portfolio.github} className='btn' target="_blank">
                    Github
                </a>
                <a href={portfolio.dribbble} className='btn btn-primary' target='_blank'>
                    Live Demo
                </a>
            </div>
        </article>
    )
}

export default PortfolioCard
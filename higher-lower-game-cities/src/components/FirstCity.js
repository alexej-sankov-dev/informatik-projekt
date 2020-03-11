import React from 'react';

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


class FirstCity extends React.Component {
    
    render() {
        const city = this.props.city
        var population = city.population
        return(
            <div key="0" className="city" style={{backgroundImage: `url(${city.image})`}}>
                <div className="city-wrapper">
                    <div className="city-name">
                        <p className="city-name-text">
                            {city.name}
                        </p>
                        <p className="city-country-text">
                            in {city.country}
                            </p>
                        <p>hat</p>

                    </div>
                    <div className="city-population">
                        <p className="city-population-text">
                            {numberWithDots(population)}
                        </p>
                        <p>Einwohner</p>  
                    </div>
                </div>
                <a rel="nofollow noopener noreferrer" target="_blank" className="attribution" href={`${city.image}`}>
                    Bild: {this.props.city.name}
                </a>
            </div>
        )
    }
}

export default FirstCity
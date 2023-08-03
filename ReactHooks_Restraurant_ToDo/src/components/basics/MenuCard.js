import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currEle) => {
                    const { id, name, category, image, description } = currEle;
                    return (
                        <>
                            <div className="card-container" key={currEle.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className='card-author subtle'>{name}</span>
                                        <br />
                                        <img src={image} alt="images" className='card-media' />
                                        <h5 className='card-title'>{name}</h5>
                                        <span className='card-description subtle'>
                                            {description}
                                        </span>
                                        <div className='card-read'>Read</div>
                                    </div>

                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </section>
        </>
    )
}

export default MenuCard;

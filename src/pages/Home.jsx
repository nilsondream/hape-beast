import React from 'react'
import Item from 'components/Item'
import { dataHape } from 'assets/data'

const Home = () => {
    return (
        <div className='home-styled'>
            {
                dataHape.map((item) => {
                    return (
                        <Item key={item.id} {...item} />
                    );
                })
            }
        </div>
    )
}

export default Home
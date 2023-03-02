import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectSlug } from 'selectors/getProjectSlug'
import { ArrowLeft, Minus, Plus } from 'phosphor-react'
import Fur from 'assets/images/Fur.svg'
import Clothing from 'assets/images/Clothing.svg'
import Jewellery from 'assets/images/Jewellery.svg'
import Headwear from 'assets/images/Headwear.svg'
import Accessory from 'assets/images/Accessory.svg'

const Hape = () => {

    const { slug } = useParams();
    const hape = useMemo(() => getProjectSlug(slug), [slug]);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleReturn = () => {
        navigate(-1);
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='hape-styled' style={{ background: hape.color }}>
            <div className='hape-back'>
                <button onClick={toggleReturn}>
                    <ArrowLeft size={15} weight='bold' />
                </button>
            </div>

            <div className='hape-info'>
                <button onClick={toggle}>
                    {!isOpen ? <Plus size={15} weight='bold' /> : <Minus size={15} weight='bold' />}
                </button>
            </div>

            <div className={isOpen ? 'hape-data hape-data-open' : 'hape-data'}>
                <div className='line' />

                <div className='data-item'>
                    <img src={Fur} alt="fur" />
                    <p><span>Piel</span>{hape.fur}</p>
                </div>

                <div className='line' />

                <div className='data-item'>
                    <img src={Clothing} alt="clothing" />
                    <p><span>Ropa</span>{hape.clothing}</p>
                </div>

                <div className='line' />

                <div className='data-item'>
                    <img src={Jewellery} alt="jewellery" />
                    <p><span>Joyas</span>{hape.jewellery}</p>
                </div>

                <div className='line' />

                <div className='data-item'>
                    <img src={Headwear} alt="headwear" />
                    <p><span>Sombreros</span>{hape.headwear}</p>
                </div>
                
                <div className='line' />

                <div className='data-item'>
                    <img src={Accessory} alt="addition" />
                    <p><span>Adición</span>{hape.addition}</p>
                </div>
            </div>

            <div className='hape-top'>
                <div className='data'>
                    <p>Votos {hape.votes}</p>|
                    <p>Radio {hape.ratio}%</p>|
                    <p>Puntos {hape.points}</p>
                </div>
                <h1><span>#</span>{hape.number}</h1>
            </div>

            <img className='hape-image' src={hape.img} alt={hape.number} />
        </div>
    )
}

export default Hape
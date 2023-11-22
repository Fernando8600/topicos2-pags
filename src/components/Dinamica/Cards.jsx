import { useState, useRef } from 'react'
import Card from './Card'
import Num1 from '../../imagesMemo3/01.png';
import Num2 from '../../imagesMemo3/02.png';
import Num3 from '../../imagesMemo3/03.avif';
import Num4 from '../../imagesMemo3/04.jpg';
import Num5 from '../../imagesMemo3/05.png';
import Num6 from '../../imagesMemo3/06.jpg';
import Num7 from '../../imagesMemo3/07.jpg';
import Num8 from '../../imagesMemo3/08.jpg';

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 0, name: 'Cal Newport', status: '', img: Num1 },
        { id: 0, name: 'Cal Newport', status: '', img: Num1 },
        { id: 1, name: 'Daniel Goleman', status: '', img: Num2 },
        { id: 1, name: 'Daniel Goleman', status: '', img: Num2 },
        { id: 2, name: 'Trabajo', status: '', img: Num3 },
        { id: 2, name: 'Trabajo', status: '', img: Num3 },
        { id: 3, name: 'Meditacion', status: '', img: Num4 },
        { id: 3, name: 'Meditacion', status: '', img: Num4 },
        { id: 4, name: 'Multitasking', status: '', img: Num5 },
        { id: 4, name: 'Multitasking', status: '', img: Num5 },
        { id: 5, name: 'Metas', status: '', img: Num6 },
        { id: 5, name: 'Metas', status: '', img: Num6 },
        { id: 6, name: 'Rutinas', status: '', img: Num7 },
        { id: 6, name: 'Rutinas', status: '', img: Num7 },
        { id: 7, name: 'Distractores', status: '', img: Num8 },
        { id: 7, name: 'Distractores', status: '', img: Num8 },
    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if (cards[currentCard].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        } else {
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {

        if (index !== previousIndex.current) {
            if (cards[index].status === 'active matched') {
                alert('already matched')
            } else {
                if (previousCardState === -1) {
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                } else {
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        } else {
            alert('card currently seleted')
        }

    }

    return (
        <div className="containerCarta">
            {cards.map((card, index) => {
                return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
            })}
        </div>
    );
}

export default Cards;
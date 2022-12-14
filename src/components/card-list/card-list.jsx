import React from "react";
import Card from "../card/card";
import './card-list.styles.css'

class CardList extends React.Component {

    render() {
        console.log(this.props.monsters);
        const { monsters } = this.props
        console.log(monsters , "from card list");
        return (
            <div className="card-list">
                {monsters.map((monst) => {
                    const { name , email , id } = monst
                    return (
                        <div key={monst.id} className='card-container'>
                            <img 
                                src={`https://robohash.org/${66 + id}/?set=set2&size=180x180`} 
                                alt={`monster ${name}`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
                <Card array={monsters}/>
            </div>
        )
    }
}

export default CardList
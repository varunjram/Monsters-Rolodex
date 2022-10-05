import React  from "react";


class Card extends React.Component{

    render(){
        const { array } = this.props;
        console.log(array);
        return(
            <>
                {array.map((monst) => {
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
            </>
        )
    }
}

export default Card
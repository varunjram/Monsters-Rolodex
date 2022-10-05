import React from "react";

class CardList extends React.Component {

    render() {
        console.log(this.props.monsters);
        const { monsters } = this.props
        return (

            <div>
                {monsters.map((monst) => {
                    return (
                        <div key={monst.id}>
                            <h1>{monst.name}</h1>
                         </div>
                    )
                })}
            </div>

        )
    }
}

export default CardList
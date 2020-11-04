import React from "react"

const Square = ({onClick, value}) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;
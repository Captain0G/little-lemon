
export default function ListGroup (){
    const items = ['London', 'New York', 'Cairo','Paris']
    return(
        <>
        <h1>List Group</h1>
            {items.length === 0 && "No items found :("}
            <ul>

                {items.map(item => <li key={item} > {item} </li>)}

            </ul>

        </>
)
    }



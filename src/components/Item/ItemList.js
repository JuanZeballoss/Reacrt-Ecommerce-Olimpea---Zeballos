import Item from "./Item"

function ItemList({ data }) {

    return (
        <div>
            {data.map((movie) => {
                return (
                    <Item
                        key={movie.id}
                        title={movie.title}
                        price={movie.price}
                        category={movie.category}
                        stock={movie.stock}
                        img={movie.img}
                    />
                )
            })
            }
        </div>
    )
}

export default ItemList;
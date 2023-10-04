import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <ItemDetail key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
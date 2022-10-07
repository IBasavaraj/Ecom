import ItemCard from '../Components/ItemCard'
import { itemData } from '../Constants/productList'

export default function Home() {
  return (
    <div>
      {itemData.map((item) => (
        <ItemCard key={item.itemId} item={item} currentComponent="home" />)
      )}
    </div>
  )
}

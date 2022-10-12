import ItemCard from "./ItemCard"
function DisplayItems({displayItems, currentComponent}){
    return <>
    {displayItems?.map((item) => (
          <ItemCard key={item.itemId} item={item} currentComponent={currentComponent} />)
        )}
    </>
}
export default DisplayItems;
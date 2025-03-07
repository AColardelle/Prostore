
import ProductList from "@/components/shared/header/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";
const Homepage = async () => {
  const latestProducts = await getLatestProducts()

  return (<>
  <ProductList data={latestProducts} title='Newest Arrival'  />
  </>)
}
 
export default Homepage;
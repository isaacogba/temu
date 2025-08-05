import { getAllProducts } from "@/sanity/lib/client";
import { getCurrentSession } from "./action/auth";
import SalesCampaignBanner from "./components/layout/SalesCampaignBanner";
import { product } from "@/sanity/schemaTypes/schemas/product";
import ProductGrid from "./components/products/ProductGrid";


const Home = async () => {
const { user } = await getCurrentSession();

  const products = await getAllProducts();


return (
    <div >
      <SalesCampaignBanner />

  <section className="container mx-auto py-8">
        <ProductGrid products={products} /> {/* pass products array */}
      </section>
    </div>
  );
}

export default Home
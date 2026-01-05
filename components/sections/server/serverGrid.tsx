import { product } from "@/app/products/page";
import ProductsCard from "@/components/shared/productsCard";

export default function ServerGridSection({
    productsData,
}: {
    productsData: product[];
}) {
    return (
        <div className="hidden xl:grid grid-cols-4 gap-8">
            {productsData.map((product, index) => (
                <ProductsCard
                    title={product.title}
                    text={product.text}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    key={index}
                    price={product.price}
                    className="h-full"
                />
            ))}
        </div>
    );
}

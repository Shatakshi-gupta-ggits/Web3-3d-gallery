
import { ProductCard } from "./ProductCard";

const sampleProducts = [
  {
    id: "1",
    name: "Web3 Developer Certification NFT",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    basePrice: 99,
    category: "Certification",
    variants: [
      { id: "basic", name: "Basic", price: 99, inStock: true },
      { id: "premium", name: "Premium", price: 149, inStock: true },
      { id: "enterprise", name: "Enterprise", price: 299, inStock: false }
    ]
  },
  {
    id: "2",
    name: "Smart Contract Audit Badge",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    basePrice: 199,
    category: "Badge",
    variants: [
      { id: "standard", name: "Standard", price: 199, inStock: true },
      { id: "advanced", name: "Advanced", price: 349, inStock: true }
    ]
  },
  {
    id: "3",
    name: "DeFi Protocol Specialist",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    basePrice: 259,
    category: "Specialization",
    variants: [
      { id: "level1", name: "Level 1", price: 259, inStock: true },
      { id: "level2", name: "Level 2", price: 399, inStock: false },
      { id: "level3", name: "Level 3", price: 599, inStock: true }
    ]
  },
  {
    id: "4",
    name: "Blockchain Architecture Expert",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
    basePrice: 399,
    category: "Expert",
    variants: [
      { id: "junior", name: "Junior Expert", price: 399, inStock: true },
      { id: "senior", name: "Senior Expert", price: 699, inStock: true }
    ]
  },
  {
    id: "5",
    name: "NFT Creator Mastery",
    image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=400&h=300&fit=crop",
    basePrice: 179,
    category: "Creative",
    variants: [
      { id: "basic", name: "Basic", price: 179, inStock: true },
      { id: "pro", name: "Pro", price: 299, inStock: true },
      { id: "master", name: "Master", price: 499, inStock: false }
    ]
  },
  {
    id: "6",
    name: "DAO Governance Specialist",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    basePrice: 229,
    category: "Governance",
    variants: [
      { id: "community", name: "Community", price: 229, inStock: true },
      { id: "enterprise", name: "Enterprise", price: 449, inStock: true }
    ]
  }
];

export const ProductGallery = () => {
  const handleAddToCart = (productId: string, variantId: string) => {
    console.log(`Adding to cart: Product ${productId}, Variant ${variantId}`);
    // Here you would typically integrate with your cart state management
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Premium Credentials Store
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock your potential with verified Web3 credentials and skill certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover-3d">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

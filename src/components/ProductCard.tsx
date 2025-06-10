
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  variants: ProductVariant[];
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string, variantId: string) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0]?.id || "");
  
  const currentVariant = product.variants.find(v => v.id === selectedVariant) || product.variants[0];
  const isOutOfStock = !currentVariant?.inStock;

  const handleAddToCart = () => {
    if (onAddToCart && !isOutOfStock) {
      onAddToCart(product.id, selectedVariant);
    }
  };

  return (
    <Card className="glass-card hover-3d group overflow-hidden transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-primary-cyan/20 text-primary-cyan border-primary-cyan/30">
            {product.category}
          </Badge>
        </div>
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mb-4">
          <div className="text-2xl font-bold text-primary-gradient mb-1">
            ${currentVariant?.price || product.basePrice}
          </div>
          {currentVariant?.price !== product.basePrice && (
            <div className="text-sm text-gray-400 line-through">
              ${product.basePrice}
            </div>
          )}
        </div>

        {product.variants.length > 1 && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Variant
            </label>
            <Select value={selectedVariant} onValueChange={setSelectedVariant}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/20">
                {product.variants.map((variant) => (
                  <SelectItem 
                    key={variant.id} 
                    value={variant.id}
                    className="text-white hover:bg-white/10"
                    disabled={!variant.inStock}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{variant.name}</span>
                      <span className="ml-2 font-semibold">${variant.price}</span>
                      {!variant.inStock && (
                        <Badge variant="destructive" className="ml-2 text-xs">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`w-full font-semibold transition-all duration-300 ${
            isOutOfStock 
              ? "bg-gray-600 text-gray-300 cursor-not-allowed hover:bg-gray-600" 
              : "btn-primary"
          }`}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

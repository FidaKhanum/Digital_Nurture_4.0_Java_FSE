package week1.Data_structures_algo;

import java.util.Arrays;
import java.util.Comparator;

public class Ecommerce_platform_search_function {

    // Inner Product class
    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
		public String toString() {
            return "[" + productId + "] " + productName + " (" + category + ")";
        }
    }

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0) {
				return products[mid];
			}
            if (cmp < 0) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
        }
        return null;
    }

    // Main method
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Mobile", "Electronics"),
            new Product(105, "Watch", "Accessories")
        };

        String searchName = "Mobile";

        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, searchName);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, searchName);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}

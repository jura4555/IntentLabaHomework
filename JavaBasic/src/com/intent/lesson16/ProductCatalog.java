package com.intent.lesson16;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductCatalog {
    private List<Product> products;

    public ProductCatalog() {
        this.products = new ArrayList<>();
    }

    public void addProduct(String productName) {
        if(products == null) {
            System.err.println("Product catalog is not exist. Please create a new product catalog");
            return;
        }
        products.add(new Product(productName));
        System.out.println("Product with name: '" + productName + "' was created.");
    }

    public  void removeProductByIndex(int index) {
        if(index > 0 && index <= products.size()) {
            products.remove(index - 1);
            System.out.println("Product with id: " + index + " was removed.");
        } else {
            System.err.println("Invalid index");
        }
    }

    public  void removeProductByName(String productName) {
        List<Product> productsToRemove = findProductsByNameIgnoreCase(productName);
        removeProducts(productName, productsToRemove);
    }

    public void displayProducts() {
        if(products.isEmpty()) {
            System.out.println("Product list is empty. Please add new product");
            return;
        } else {
            System.out.println("Product list:");
            for (int i = 0; i < products.size(); i++) {
                System.out.println(i + 1 + ": " + products.get(i).getName());
            }
        }
    }

    public void sortProduct() {
        products = products.stream()
                .sorted((p1, p2) -> p1.getName().compareToIgnoreCase(p2.getName()))
                .collect(Collectors.toList());
        System.out.println("Products sorted successfully.");
    }

    public void filterProduct(String key) {
        List<Product> filteredProducts = filterProductsByName(key);
        displayFilteredProducts(key, filteredProducts);
    }

    public void createCatalog() {
        if(products == null) {
            products = new ArrayList<>();
        }
        products.clear();
        System.out.println("Catalog created. All existing products have been removed.");
    }

    public void removeCatalog() {
        products.clear();
        products = null;
        System.out.println("Catalog deleted. Please create a new product catalog for future work");
    }

    public boolean catalogNotExist() {
        return products == null;
    }

    private List<Product> filterProductsByName(String key) {
        return products.stream()
                .filter(product -> product.getName().toLowerCase().contains(key.toLowerCase()))
                .collect(Collectors.toList());
    }

    private void displayFilteredProducts(String key, List<Product> filteredProducts) {
        if(filteredProducts.isEmpty()) {
            System.out.println("Products by key '" + key + "' not found");
            return;
        } else {
            System.out.println("Filtered product list by key: '" + key + "'");
            for (int i = 0; i < filteredProducts.size(); i++) {
                System.out.println(i + 1 + ": " + filteredProducts.get(i).getName());
            }
        }
    }

    private List<Product> findProductsByNameIgnoreCase(String productName) {
        return products.stream()
                .filter(product -> product.getName().equalsIgnoreCase(productName))
                .collect(Collectors.toList());
    }

    private void removeProducts(String productName, List<Product> productsToRemove) {
        if(!productsToRemove.isEmpty()) {
            products.removeAll(productsToRemove);
            System.out.println("Product(s) with name: '" + productName + "' was removed.");
        } else {
            System.err.println("Product(s) with name: '" + productName + "' was not removed because it product(s) " +
                    "with this name not exist\n");
        }
    }
}

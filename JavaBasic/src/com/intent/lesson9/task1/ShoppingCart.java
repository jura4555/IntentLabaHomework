package com.intent.lesson9.task1;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {

    private List<ElectronicsProduct> products;

    public ShoppingCart() {
        products = new ArrayList<>();
    }

    public void addProduct(ElectronicsProduct product){
        products.add(product);
    }

    public void removeProduct(ElectronicsProduct product) {
        products.remove(product);
    }

    public double calculateTotal() {
        double result = 0.0;
        for (int i = 0; i < products.size(); i++) {
            result += products.get(i).getPrice();
        }
        return result;
    }
}

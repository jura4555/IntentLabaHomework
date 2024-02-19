package com.intent.lesson9.task1;

public class Main {
    public static void main(String[] args) {
        Smartphone smartphone = new Smartphone("iPhone 13", 1200.0, "Apple", 8, 128, 6.1, "12 MP");
        System.out.println("Smartphone example");
        System.out.println(smartphone.getName());
        System.out.println(smartphone.getPrice());
        System.out.println(smartphone.getDescription() + "\n");

        Laptop laptop = new Laptop("Dell XPS 15", 1599.99, "Dell", "Intel Core i7", 16, 512, 15.6, "Windows 11");
        System.out.println("Laptop example");
        System.out.println(laptop.getName());
        System.out.println(laptop.getPrice());
        System.out.println(laptop.getDescription() + "\n");

        TV tv = new TV("Samsung QLED 4K", 1499.99, "Samsung", 55, "3840x2160", "QLED", 120);
        System.out.println("TV example");
        System.out.println(tv.getName());
        System.out.println(tv.getPrice());
        System.out.println(tv.getDescription() + "\n");

        ShoppingCart cart = new ShoppingCart();
        cart.addProduct(smartphone);
        cart.addProduct(laptop);
        cart.addProduct(tv);
        double total = cart.calculateTotal();
        System.out.println("Total price: $" + total);

    }
}
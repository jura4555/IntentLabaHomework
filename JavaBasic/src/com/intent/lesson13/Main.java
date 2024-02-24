package com.intent.lesson13;


public class Main {
    public static void main(String... args) {
        Warehouse warehouse = new Warehouse();
        Customer[] customers = new Customer[3];
        for (int i = 0; i < customers.length; i++) {
            customers[i] = new Customer("Customer " + (i + 1), warehouse);
            customers[i].start();
        }
        for (Customer customer : customers) {
            try {
                customer.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("All customers have finished their purchases. The warehouse is having a sale!");
    }
}

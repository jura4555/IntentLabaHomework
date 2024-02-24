package com.intent.lesson13;

public class Good {
    private String name;
    private int quantity;

    public Good(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    @Override
    public String toString() {
        return "Good{" +
                "name='" + name + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}

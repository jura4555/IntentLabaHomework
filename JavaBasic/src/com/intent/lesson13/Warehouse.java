package com.intent.lesson13;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Warehouse {
    private List<Good> goods;
    private int capacity;
    private int restockCount;
    private static final double RESTOCK_THRESHOLD = 0.2;
    private static final int GOOD_AMOUNT = 100;

    public Warehouse() {
        Good good1 = new Good("TV", GOOD_AMOUNT);
        Good good2 = new Good("table", GOOD_AMOUNT);
        Good good3 = new Good("laptop", GOOD_AMOUNT);
        this.goods = new ArrayList<>(Arrays.asList(good1, good2, good3));
        this.capacity = goods.size() * GOOD_AMOUNT;
        this.restockCount = 5;
    }

    public synchronized void buy(String nameCustomer, String goodName, int quantity) {
        for (Good good : goods) {
            if (good.getName().equals(goodName)) {
                if (good.getQuantity() >= quantity) {
                    good.setQuantity(good.getQuantity() - quantity);
                    System.out.println("Customer: " + nameCustomer + " purchased " + quantity + " units of " + goodName);
                    if (capacity * RESTOCK_THRESHOLD > getTotalQuantity() && restockCount > 0) {
                        restock();
                    }
                    return;
                } else {
                    System.out.println("Good with a name " + good.getName() + " not enough to make a purchase");
                    return;
                }
            }
        }
        System.out.println("Good with name " + goodName + "not found in warehouse");
    }

    public int getTotalQuantity() {
        int totalQuantity = 0;
        for (int i = 0; i < goods.size(); i++) {
            totalQuantity += goods.get(i).getQuantity();
        }
        return totalQuantity;
    }

    public void restock() {
        for (int i = 0; i < goods.size(); i++) {
            goods.get(i).setQuantity(GOOD_AMOUNT);
        }
        restockCount = restockCount - 1;
        System.out.println("Goods in stock have been replenished");
    }

    public synchronized boolean isAvailable() {
        return getTotalQuantity() > 0;
    }

    @Override
    public String toString() {
        return "Warehouse{" +
                "goods=" + goods +
                '}';
    }

}

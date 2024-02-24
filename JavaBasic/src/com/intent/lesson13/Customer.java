package com.intent.lesson13;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Customer extends Thread {

    private String name;
    private Warehouse warehouse;

    public Customer(String name, Warehouse warehouse) {
        this.warehouse = warehouse;
        this.name = name;
    }

    @Override
    public void run() {
        Random random = new Random();
        List<String> goodNameList = new ArrayList<>(Arrays.asList("TV", "table", "laptop"));
        while (warehouse.isAvailable()) {
            try {
                Thread.sleep(random.nextInt(1000));
                int indexGood = random.nextInt(3);
                String nameGood = goodNameList.get(indexGood);
                int quantityGood = random.nextInt(20);
                warehouse.buy(name, nameGood, quantityGood);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

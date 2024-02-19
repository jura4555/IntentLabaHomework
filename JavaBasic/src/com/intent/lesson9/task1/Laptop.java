package com.intent.lesson9.task1;

public class Laptop implements ElectronicsProduct{
    private String name;
    private double price;
    private String brand;
    private String processor;
    private int ram;
    private int storage;
    private double screenSize;
    private String operatingSystem;

    public Laptop(String name, double price, String brand, String processor, int ram, int storage, double screenSize, String operatingSystem) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.screenSize = screenSize;
        this.operatingSystem = operatingSystem;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public String getDescription() {
        return "Brand: " + brand + ", Processor " + processor + ", RAM: " + ram + ", Storage: " + storage
                + ", Screen size: " + screenSize + ", Operating system: " + operatingSystem;
    }
}



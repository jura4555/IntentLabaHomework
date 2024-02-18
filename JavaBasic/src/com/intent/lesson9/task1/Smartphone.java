package com.intent.lesson9.task1;

public class Smartphone implements ElectronicsProduct{

    private String name;
    private double price;
    private String brand;
    private int ram;
    private int storage;
    private double screenSize;
    private String cameraQuality;

    public Smartphone(String name, double price, String brand, int ram, int storage, double screenSize, String cameraQuality) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
        this.screenSize = screenSize;
        this.cameraQuality = cameraQuality;
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
        return "Brand: " + brand + ", RAM: " + ram + ", Storage: " + storage
                + ", Screen size: " + screenSize + ", Camera quality: " + cameraQuality;
    }
}

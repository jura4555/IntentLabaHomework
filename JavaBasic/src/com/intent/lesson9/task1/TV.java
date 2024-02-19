package com.intent.lesson9.task1;

public class TV implements ElectronicsProduct{

    private String name;
    private double price;
    private String brand;
    private double screenSize;
    private String resolution;
    private String panelType;
    private double powerConsumption;

    public TV(String name, double price, String brand, double screenSize, String resolution, String panelType, double powerConsumption) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.screenSize = screenSize;
        this.resolution = resolution;
        this.panelType = panelType;
        this.powerConsumption = powerConsumption;
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
        return "Brand: " + brand + ", ScreenS size " + screenSize + ", Resolution: " + resolution
                + ", Panel type: " + panelType + ", Power consumption: " + powerConsumption;
    }
}





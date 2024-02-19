package com.intent.lesson9.task2;

public class Main {
    public static void main(String[] args) {
        Engineer engineer = new Engineer("John Doe", "Software Engineer", 5000, "Java, Spring, SQL");
        Manager manager = new Manager("Jane Smith", "Product Manager", 7000, "Project Management, Leadership");
        Accountant accountant = new Accountant("Mike Johnson", "Senior Accountant", 6000, "Financial Analysis");
        engineer.displayInfo();
        manager.displayInfo();
        accountant.displayInfo();

        engineer.developSoftware();
        manager.conductMeeting();
        accountant.generateFinancialReport();
    }
}

package com.intent.lesson9.task2;

public class Accountant implements Employee{
    private String name;
    private String position;
    private double salary;
    private String accountingSkills;

    public Accountant(String name, String position, double salary, String accountingSkills) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.accountingSkills = accountingSkills;
    }

    public String getName() {
        return name;
    }

    public String getPosition() {
        return position;
    }

    public double getSalary() {
        return salary;
    }

    public String getAccountingSkills() {
        return accountingSkills;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setAccountingSkills(String accountingSkills) {
        this.accountingSkills = accountingSkills;
    }

    @Override
    public void increaseSalary(double percentage) {
        this.salary += this.salary * (percentage / 100);
    }

    @Override
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Position: " + position);
        System.out.println("Salary: " + salary);
        System.out.println("Accounting skills: " + accountingSkills);
        System.out.println("-----------------------------------");
    }

    public void generateFinancialReport() {
        System.out.println(name + " is generating a financial report.");
    }
}

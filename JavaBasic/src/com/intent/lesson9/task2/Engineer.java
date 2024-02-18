package com.intent.lesson9.task2;

public class Engineer implements Employee{
    private String name;
    private String position;
    private double salary;
    private String technicalSkills ;

    public Engineer(String name, String position, double salary, String technicalSkills ) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.technicalSkills  = technicalSkills ;
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

    public String getTechnicalSkills () {
        return technicalSkills ;
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

    public void setTechnicalSkills (String technicalSkills ) {
        this.technicalSkills  = technicalSkills ;
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
        System.out.println("Technical  skills: " + technicalSkills );
        System.out.println("-----------------------------------");
    }

    public void developSoftware() {
        System.out.println(name + " is developing software.");
    }
}

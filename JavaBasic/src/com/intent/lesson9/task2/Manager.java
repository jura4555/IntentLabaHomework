package com.intent.lesson9.task2;

public class Manager implements Employee{
    private String name;
    private String position;
    private double salary;
    private String projectManagementSkills;

    public Manager(String name, String position, double salary, String projectManagementSkills) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.projectManagementSkills = projectManagementSkills;
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

    public String getProjectManagementSkills() {
        return projectManagementSkills;
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

    public void setProjectManagementSkills(String projectManagementSkills) {
        this.projectManagementSkills = projectManagementSkills;
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
        System.out.println("Project Management Skills: " + projectManagementSkills);
        System.out.println("-----------------------------------");
    }

    public void conductMeeting() {
        System.out.println(name + " is conducting a meeting.");
    }
}

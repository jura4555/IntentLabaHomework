package com.intent.lesson12.annotation;

public class MyClass {
    @DataValidation(type = ValidationType.STRING_LENGTH, min = 2, max = 15)
    private String name;

    @DataValidation(type = ValidationType.NUMERIC_RANGE, min = 10, max = 40)
    private int age;

    public MyClass(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void validateData() throws IllegalAccessException {
        Validator.validate(this);
    }
}
